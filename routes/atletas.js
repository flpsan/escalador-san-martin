import express from 'express';
import { logado } from '../middlewares';
import * as AtletasController from '../controller/atletas';

const router = express.Router();

router.get('/', logado, (req, res) => {
    AtletasController.updateAtletas(() => {
        let params = req.query;
        let atletasFiltrados = AtletasController.filtrar(params);
        return res.status(200).send(atletasFiltrados);
    });
});

export { router };