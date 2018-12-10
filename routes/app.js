import express from 'express';
import * as UsuarioController from '../controller/usuario';
import * as AtletasController from '../controller/atletas';
import * as EscaladorController from '../controller/escalador';
import { logado } from '../middlewares';
import * as helpers from '../helpers';
import * as constantes from '../helpers/constantes';

const router = express.Router();

router.get('/', logado, (req, res, next) => {
    AtletasController.updateAtletas(() => {
        let filtro = req.query;
        let atletasFiltrados =  AtletasController.filtrar(filtro);
        EscaladorController.obter(req.user._id, (err, escalacao) => {
            if (err) return next(err);
            console.log(escalacao);
            let retorno = {
                esquemas: constantes.ESQUEMAS,
                clubes: AtletasController.getClubes(),
                status: AtletasController.getStatus(),
                titulo: 'TÍTULO', 
                atletas: atletasFiltrados, 
                escalacao: helpers.formatarEscalacao(AtletasController.getTodosAtletas(), escalacao), 
                filtro: filtro };
            return res.render('index', retorno);
        });
    });    
});

router.get('/conta-cartola', logado, (req, res, next) => {
    var email = req.user.email;
    UsuarioController.obter(email, (err, usuario) => {
        if (err) return next(err);
        return res.render('conta-cartola', { titulo: 'Contas do Cartola', contasCartola: usuario.contasCartola } );
    });    
});

export { router };