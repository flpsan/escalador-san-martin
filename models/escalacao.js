const mongoose = require('mongoose');
const _ = require('lodash');
const { ESQUEMAS_DETALHADOS } = require('../helpers/constantes');

const posicoes = {
    1: {
        'id': 1,
        'nome': 'Goleiro',
        'abreviacao': 'gol'
    },
    2: {
        'id': 2,
        'nome': 'Lateral',
        'abreviacao': 'lat'
    },
    3: {
        'id': 3,
        'nome': 'Zagueiro',
        'abreviacao': 'zag'
    },
    4: {
        'id': 4,
        'nome': 'Meia',
        'abreviacao': 'mei'
    },
    5: {
        'id': 5,
        'nome': 'Atacante',
        'abreviacao': 'ata'
    },
    6: {
        'id': 6,
        'nome': 'Técnico',
        'abreviacao': 'tec'
    }
};

const escalacaoSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    esquema: {
        type: String,
        validate: [{
                validator: function (esquema) {
                    return esquema in ESQUEMAS_DETALHADOS;
                },
                msg: 'Esquema inválido.'
            },
            {
                validator: function (esquema) {
                    return this.goleiros <= ESQUEMAS_DETALHADOS[esquema].goleiros;
                },
                msg: 'Seu time já tem goleiro!'
            },
            {
                validator: function (esquema) {
                    return this.tecnicos <= ESQUEMAS_DETALHADOS[esquema].tecnicos;
                },
                msg: 'Seu time já tem técnico!'
            },
            {
                validator: function (esquema) {
                    return this.laterais <= ESQUEMAS_DETALHADOS[esquema].laterais;
                },
                msg: props => `Número de laterais inválido para o esquema ${props.value}.`
            },
            {
                validator: function (esquema) {
                    return this.zagueiros <= ESQUEMAS_DETALHADOS[esquema].zagueiros;
                },
                msg: props => `Número de zagueiros inválido para o esquema ${props.value}.`
            },
            {
                validator: function (esquema) {
                    return this.meias <= ESQUEMAS_DETALHADOS[esquema].meias;
                },
                msg: props => `Número de meias inválido para o esquema ${props.value}.`
            },
            {
                validator: function (esquema) {
                    return this.atacantes <= ESQUEMAS_DETALHADOS[esquema].atacantes;
                },
                msg: props => `Número de atacantes inválido para o esquema ${props.value}.`
            }
        ]
    },
    atletas: {
        type: [mongoose.Schema.Types.Mixed],
        validate: {
            validator: (atletas) => {
                if (atletas === null || atletas === undefined) return true;
                for (let i = 0; i < atletas.length; i++) {
                    let atleta0 = atletas[i];
                    for (let j = 0; j < atletas.length; j++) {
                        let atleta1 = atletas[j];
                        if (i === j) continue;
                        if (atleta0.atleta_id === atleta1.atleta_id) return false;
                    }
                }
                return true;
            },
            msg: 'Atleta já incluído.'
        }
    },
    capitao: {
        type: String,
        validate: {
            validator: (atletaId) => {
                console.log(this.atletas);
                return true;
            },
            msg: 'ISH'
        }
    }
});

exports.escalacaoSchema = escalacaoSchema;

function contarPosicoes(self) {
    let qtdPosicoes = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };
    if (self.atletas !== undefined && self.atletas !== null && self.atletas.length > 0) {
        for (let i = 0; i < self.atletas.length; i++) {
            let atleta = self.atletas[i];
            if (atleta.posicao_id in qtdPosicoes) {
                qtdPosicoes[atleta.posicao_id]++;
            }
        }
    }
    return qtdPosicoes;
}

escalacaoSchema.virtual('goleiros').get(function () {
    return contarPosicoes(this)[1];
});
escalacaoSchema.virtual('laterais').get(function () {
    return contarPosicoes(this)[2];
});
escalacaoSchema.virtual('zagueiros').get(function () {
    return contarPosicoes(this)[3];
});
escalacaoSchema.virtual('meias').get(function () {
    return contarPosicoes(this)[4];
});
escalacaoSchema.virtual('atacantes').get(function () {
    return contarPosicoes(this)[5];
});
escalacaoSchema.virtual('tecnicos').get(function () {
    return contarPosicoes(this)[6];
});

exports.Escalacao = mongoose.model('Escalacao', escalacaoSchema);

exports.salvar = (escalacao, cb) => {
    return escalacao.save(cb);
}

exports.obter = (usuarioId, cb) => {
    exports.Escalacao.findOne({
        usuarioId: usuarioId
    }, (err, escalacao) => {
        if (err) return cb(err);
        if (escalacao === null) {
            return new Escalacao({
                usuarioId: usuarioId,
                esquema: '4-4-2'
            }).save(cb);
        }
        var atletasSanitizados = _.filter(escalacao.atletas, (atleta) => {
            if (!('atleta_id' in atleta) || !('posicao_id' in atleta)) return false;
            if (atleta.atleta_id === '' || atleta.atleta_id === undefined || atleta.atleta_id === null) return false;
            if (atleta.posicao_id === '' || atleta.posicao_id === undefined || atleta.posicao_id === null) return false;
            if (!(parseInt(atleta.posicao_id) in posicoes)) return false;
            return true;
        });
        if (escalacao.atletas.length !== atletasSanitizados.length) {
            escalacao.set('atletas', atletasSanitizados);
            this.salvar(escalacao, (err2) => {
                if (err2) return cb(err2);
                return cb(null, escalacao);
            });
        } else {
            return cb(null, escalacao);
        }
    });

}