const express = require('express');
const usuarioModel = require('../models/usuario');
const contaCartolaModel = require('../models/conta-cartola');
const middlewares = require('../middlewares');
const logado = middlewares.logado;

const router = express.Router();

router.post('/conta-cartola/add', logado, (req, res, next) => {
    let emailContaCartola = req.body.email;
    let senhaContaCartola = req.body.senha;
    let contaCartola = new contaCartolaModel.ContaCartola({ email: emailContaCartola, senha: senhaContaCartola });

    usuarioModel.adicionarContaCartola(req.user.email, contaCartola, (err) => {
        if (err) return next(err);
        return res.status(200).send('Conta adicionada com sucesso.');
    });
});

router.post('/conta-cartola/remover', logado, (req, res, next) => {    
    let idContaCartola = req.body.id;    
    let contaCartola = new contaCartolaModel.ContaCartola({ _id: idContaCartola });

    usuarioModel.removerContaCartola(req.user.email, contaCartola, (err) => {
        if (err) return next(err);
        return res.status(200).send('Conta removida com sucesso.');
    });
});

router.post('/conta-cartola/limpar', logado, (req, res, next) => {    
    usuarioModel.limparContasCartola(req.user.email, (err) => {
        if (err) return next(err);
        return res.status(200).send('Contas removidas com sucesso.');
    });
});

exports.router = router;