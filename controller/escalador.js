import https from 'https';
import moment from 'moment';
import * as escalacaoModel from '../models/escalacao';
import {
    CartolaError, SanMartinError
} from '../helpers/sanmartinerror';

let requestId = 0;
let requestControl = [];
const LOGIN = 1;
const ESCALAR = 2;

function escalarTime(email, senha, jsonEscalacao, cb) {
    function gerarOptions(tipo, xglbToken) {
        let options = {
            'port': 443,
            'method': 'POST',
            'headers': {
                'Connection': 'keep-alive',
                'Content-Type': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
            }
        };
        if (tipo == LOGIN) {
            options.host = 'login.globo.com';
            options.path = '/api/authentication';
        } else if (tipo == ESCALAR) {
            options.host = 'api.cartolafc.globo.com';
            options.path = '/auth/time/salvar';
            options.headers['X-GLB-Token'] = xglbToken;
        }
        return options;
    }

    function makeRequest(tipo, options, jsonBody, callbackSucess, callbackError) {
        let request = https.request(options, (res) => {
            res.on('data', (data) => {
                let jsonData = JSON.parse(data);
                if (tipo == LOGIN) {
                    if ('id' in jsonData) {
                        if (jsonData.id == 'MissingCredentials') {
                            callbackError(jsonData.userMessage);
                            return;
                        }
                        if (jsonData.id == 'Authenticated') {
                            if (typeof callbackSucess != 'undefined') {
                                callbackSucess(jsonData);
                                return;
                            }
                        }
                    }
                } else {
                    if (jsonData.mensagem.substring(0, 14) == 'Time Escalado!') { //{ mensagem: 'Time Escalado! Boa Sorte!' }
                        callbackSucess(jsonData.mensagem);
                        return;
                    } else {
                        callbackError(jsonData.mensagem); //{ mensagem: 'Houve algum problema e seu time não foi escalado. Tente novamente!' }
                        return;
                    }
                }
                return;
            });
        });
        request.on('error', (e) => {
            callbackError('request ERROR: ' + e);
        });
        request.on('end', function () {
            log('No more data in response.');
        });
        request.write(JSON.stringify(jsonBody));
        request.end();
    }
    let jsonBodyLogin = {
        payload: {
            email: email,
            password: senha,
            serviceId: 438
        }
    };
    let callbackErroLoginOuEscalacao = msg => {
        cb(new CartolaError(msg));
    };
    let callbackSucessLogin = jsonData => {
        if ('glbId' in jsonData) {
            let optionsEscalar = gerarOptions(ESCALAR, jsonData.glbId);
            setTimeout(function () {
                makeRequest(ESCALAR, optionsEscalar, jsonEscalacao, callbackSuccessEscalacao, callbackErroLoginOuEscalacao);
            }, Math.round(Math.random() * (3500 - 1200)) + 1200);
        }
    };
    let callbackSuccessEscalacao = jsonData => {
        cb(null, jsonData);
    };

    makeRequest(LOGIN, gerarOptions(LOGIN), jsonBodyLogin, callbackSucessLogin, callbackErroLoginOuEscalacao);
}

function loop(requestId, i, cb) {
    console.log('loop(...)', i);
    if (i === 100) {
        console.log('requestId ABRUPT end', requestId, i);
        return cb(new SanMartinError('Falha ao escalar time. #1'));
    }

    let now = moment();
    var diff = now.diff(requestControl[requestId], 'seconds');
    if (diff > 5) {
        console.log('requestId end', requestId);
        return cb(null);
    } else {
        i++;
        setTimeout(function () {
            loop(requestId, i, cb);
        }, 500);

    }
}

const obter = (userId, cb) => {
    return escalacaoModel.obter(userId, cb);
};

const escalar = (escalacao, contas, cb) => {
    requestId++;
    console.log('requestId start', requestId, 'escalacao', escalacao, 'contas', contas);

    let now = moment();
    requestControl[requestId] = now;
    return loop(requestId, 0, cb);
};

const removerAtleta = (userId, atletaId, cb) => {
    return escalacaoModel.Escalacao.update({'usuarioId': userId}, {$pull: { atletas: {'atleta_id': atletaId }}}, {'multi': false}, cb);
};

const capitao = (userId, atletaId, cb) => {
    obter(userId, (err, escalacao) => {
        if (err) return cb(err);
        escalacao.set('capitao', atletaId);
        return escalacaoModel.salvar(escalacao, cb);
    });
};

export {
    obter,
    escalar,
    removerAtleta,
    capitao
};