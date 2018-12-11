const express = require('express');
const { logado } = require('../middlewares');
const AtletasController = require('../controller/atletas').AtletasController;

const router = express.Router();

router.get('/', logado, (req, res) => {
    AtletasController.updateAtletas(() => {
        let params = req.query;
        let atletasFiltrados = AtletasController.filtrar(params);
        return res.status(200).send(atletasFiltrados);
    });
});

exports.router = router;