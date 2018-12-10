import express from 'express';
import { logado } from '../middlewares';
import * as escalacaoModel from '../models/escalacao';
import * as EscalacaoController from '../controller/escalador';

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(500).send('Not implemented');
});

router.post('/limpar', logado, (req, res, next) => {
    escalacaoModel.obter(req.user._id, (err, escalacao) => {
        if (err) return next(err);
        escalacao.set('atletas', []);
        escalacaoModel.salvar(escalacao, (err, escalacaoSalva) => {
            if (err) return next(err);
            return res.status(200).send(escalacaoSalva);
        });
    });
});

router.post('/alterar-esquema', logado, (req, res, next) => {
    let esquema = req.body.esquema;
    escalacaoModel.obter(req.user._id, (err, escalacao) => {
        if (err) return next(err);
        escalacao.set('esquema', esquema);
        escalacaoModel.salvar(escalacao, (err, escalacaoSalva) => {
            if (err) return next(err);
            return res.status(200).send(escalacaoSalva);
        });
    });
});

router.post('/atleta/escalar', logado, (req, res, next) => {
    let posicao_id = req.body.posicao_id;
    let atleta_id = req.body.atleta_id;
    escalacaoModel.obter(req.user._id, (err, escalacao) => {
        if (err) return next(err);
        escalacao.atletas.push({atleta_id: atleta_id, posicao_id: posicao_id});
        escalacaoModel.salvar(escalacao, (err, escalacaoSalva) => {
            if (err) return next(err);
            return res.status(200).send(escalacaoSalva);
        });
    });
});

router.post('/atleta/capitao', logado, (req, res, next) => {
    let atleta_id = req.body.atleta_id;
    EscalacaoController.capitao(req.user._id, atleta_id, (err) => {
        if (err) return next(err);
        return res.status(200).send('Capitão adicionado com sucesso');
    });
});

router.post('/atleta/remover', logado, (req, res, next) => {
    let atleta_id = req.body.atleta_id;
    EscalacaoController.removerAtleta(req.user._id, atleta_id, (err) => {
        if (err) return next(err);
        return res.status(200).send('Removido com sucesso');
    });
});

router.post('/escalar', logado, (req, res, next) => {
    escalacaoModel.obter(req.user._id, (err, escalacao) => {
        if (err) return next(err);
        EscalacaoController.escalar(escalacao, [], (err2) => {
            if (err2) return next(err2);
            return res.status(200).send('Escalação efetuada com sucesso');
        });
    });
});

export { router };