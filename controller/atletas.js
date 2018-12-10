import https from 'https';
import moment from 'moment';
import { ParametroInvalidoError } from '../helpers/sanmartinerror';
import _ from 'lodash';

let cartola = {
    moment: null,
    jsonmercado: null
};

const helperFiller = {
    clube_id: { jsonmercadoKey: 'clubes', jsonmercadoSubKey: 'nome', newKey: 'clube' },
    status_id: { jsonmercadoKey: 'status', jsonmercadoSubKey: 'nome', newKey: 'status' },
    posicao_id: { jsonmercadoKey: 'posicoes', jsonmercadoSubKey: 'nome', newKey: 'posicao' }
};

const filtros = [
    { filtroKey: 'clube_id', atletaKey: 'clube_id', tipo: 'integer=', desc: 'clube' },
    { filtroKey: 'status_id', atletaKey: 'status_id', tipo: 'integer=', desc: 'status' },
    { filtroKey: 'posicao_id', atletaKey: 'posicao_id', tipo: 'integer=', desc: 'posicao' },
    { filtroKey: 'preco_num', atletaKey: 'preco_num', tipo: 'numeric><', desc: 'preço' },
    { filtroKey: 'nome', atletaKey: ['nome', 'apelido'], tipo: 'string', desc: 'nome' }
];

function fillInfo(atletas) {
    return _.map(atletas, atleta => {
        _.forEach(helperFiller, (helper, helperKey) => {
            if (helperKey in atleta) {
                let id = atleta[helperKey];
                let jsonmercadoValues = cartola.jsonmercado[helper.jsonmercadoKey];
                if (id in jsonmercadoValues) {
                    let jsonmercadoValue = jsonmercadoValues[id];
                    if (helper.jsonmercadoSubKey in jsonmercadoValue) {
                        atleta[helper.newKey] = jsonmercadoValue[helper.jsonmercadoSubKey];
                    }
                }
            }
            delete atleta.scout;
            delete atleta.rodada_id;
            delete atleta.foto;
            delete atleta.slug;
            delete atleta.pontos_num;
            delete atleta.variacao_num;
            delete atleta.jogos_num;
        });
        return atleta;
    });
}

const updateAtletas = (cb) => {  
    let callApi = false;
    let now = moment();
    if (cartola.moment == null) {
        cartola.moment = now;
        callApi = true;
    } else {
        var diff = now.diff(cartola.moment, 'minutes');
        if (diff > 30) {
            cartola.moment = now;
            callApi = true;
        }
    }

    if (callApi) {
        console.log('Chamando API do Cartola para obter os atletas...');
        chamarApi((err, jsonmercado) => {
            if (err) return next(err);
            cartola.jsonmercado = jsonmercado;
            let atletasFilled = fillInfo(jsonmercado.atletas);
            cartola.jsonmercado.atletasFilled = atletasFilled;
            return cb();
        });
    } else {
        return cb();
    }
};

function chamarApi(cb) {
    let host = 'api.cartolafc.globo.com';
    let path = '/atletas/mercado';

    let options = { 
        host: host, path: path, port: 443,
        headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36' }
    };
    https.get(options, (r) => {
        let buffer = [];
        r.on('data', (chunk) => {
            buffer.push(chunk);
        }).on('end', () => {
            buffer = Buffer.concat(buffer).toString();
            let jsonmercado = JSON.parse(buffer);
            return cb(null, jsonmercado);
        });
    });
}

/**
 * Filtra um array de atletas de acordo com o filtro informado.
 * @param {Object} params - Parâmetros do filtro.
 * @param {Object[]} [atletas] - Lista original de atletas que será filtrada. Opcional.
 * for
 */
const filtrar = (params, atletas) => {
    atletas = atletas || cartola.jsonmercado.atletasFilled;
    return  _.filter(atletas, atleta => {
        let atendeAosFiltros = [];
        for (let i = 0; i < filtros.length; i++) {
            let filtro = filtros[i];
            if (filtro.filtroKey in params) {
                let paramvalues = params[filtro.filtroKey];
                if (!_.isArray(paramvalues)) {
                    paramvalues = [paramvalues];
                }
                let atletavalue;
                if (_.isArray(filtro.atletaKey)) {
                    atletavalue = [];
                    _.forEach(filtro.atletaKey, (atletaKey) => {
                        atletavalue.push(atleta[atletaKey]);
                    });
                } else {
                    atletavalue = atleta[filtro.atletaKey];
                }
                if (filtro.tipo == 'integer=') {
                    let atende = false;
                    for (let j = 0; j < paramvalues.length; j++) {                        
                        let paramvalue = _.toInteger(paramvalues[j]);
                        if (atletavalue === paramvalue) {
                            atende = true;
                            break;
                        }
                    }
                    atendeAosFiltros.push(atende);
                }
                if (filtro.tipo == 'numeric><') {
                    if (paramvalues.length !== 2) {
                        return next(new ParametroInvalidoError(filtro.desc));
                    }
                    let param0 = _.toNumber(paramvalues[0]);
                    let param1 = _.toNumber(paramvalues[1]);
                    atendeAosFiltros.push(atletavalue >= param0 && atletavalue <= param1);
                }
                if (filtro.tipo == 'string') {
                    let atletavalues = atletavalue;
                    if (!_.isArray(atletavalue)) {
                        atletavalues = [atletavalue];
                    }
                    let atende = false;
                    for (let j = 0; j < paramvalues.length; j++) {
                        let paramvalue = _.trim(_.lowerCase(paramvalues[j]));
                        for (let y = 0; y < atletavalues.length; y++) {
                            let atletavaluee = _.lowerCase(atletavalues[y]);
                            if (_.startsWith(atletavaluee, paramvalue) || _.endsWith(atletavaluee, paramvalue)) {
                                atende = true;
                                break;
                            }
                        }
                    }
                    atendeAosFiltros.push(atende);
                }
            }
        }
        for (let i = 0; i < atendeAosFiltros.length; i++) {
            if (!atendeAosFiltros[i]) {
                return false;
            }
        }
        return true;
    });
};

let getTodosAtletas = () => cartola.jsonmercado.atletas;
let getClubes = () => cartola.jsonmercado.clubes;
let getStatus = () => cartola.jsonmercado.status;

export { filtrar, updateAtletas, getTodosAtletas, getClubes, getStatus };