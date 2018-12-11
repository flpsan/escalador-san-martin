const usuarioModel = require('../models/usuario');

exports.Usuario = usuarioModel.Usuario;

exports.obter = (email, cb) => {
    return usuarioModel.obter(email, cb);
};

exports.obterOuCriar = (usuario, cb) => {
    return usuarioModel.obterOuCriar(usuario, cb);
};