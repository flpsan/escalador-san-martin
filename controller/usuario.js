import * as usuarioModel from '../models/usuario';

const Usuario = usuarioModel.Usuario;

const obter = (email, cb) => {
    return usuarioModel.obter(email, cb);
};

const obterOuCriar = (usuario, cb) => {
    return usuarioModel.obterOuCriar(usuario, cb);
};

export { obter, obterOuCriar, Usuario };