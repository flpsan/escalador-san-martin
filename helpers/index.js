const _ = require('lodash');

/**
 * Recebe uma escalação e formata para o formato da tela.
 * @param {Object} todosAtletasDoMercado 
 * @param {*} escalacao 
 */
exports.formatarEscalacao = (todosAtletasDoMercado, escalacao) => {
    return { 
        atletas: _.sortBy(_.intersectionWith(todosAtletasDoMercado, escalacao.atletas, (obj, oth) => obj.atleta_id == parseInt(oth.atleta_id)), 'posicao_id'),
        esquema: escalacao.esquema
    };
}