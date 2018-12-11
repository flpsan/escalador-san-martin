const mongoose = require('mongoose');
const { UsuarioNaoEncontradoError, ContaCartolaJaExisteError, ContaCartolaNaoExisteError } = require('../helpers/sanmartinerror');
const { contaCartolaSchema } = require('../models/conta-cartola');

const usuarioSchema = new mongoose.Schema({
    id: { type: String, required: true },
    email: { type: String, unique: true },
    nome: { type: String, required: true },
    primeiroProfile: { type: String },
    googleProfile: { type: mongoose.Schema.Types.Mixed },
    facebookProfile: { type: mongoose.Schema.Types.Mixed },
    lastLogin: { type: Date },
    dataDeCriacao: { type: Date },
    contasCartola: { type: [contaCartolaSchema] }
});

exports.Usuario = mongoose.model('Usuario', usuarioSchema);

exports.obterOuCriar = (usuario, cb) => {
    exports.Usuario.findOne({ email: usuario.email }, (err, usuario0) => {
        if (err) cb(err);
        var dateNow = new Date().toISOString();
        if (usuario0 === null) { //Não existe, pode criar
            usuario.set({ dataDeCriacao: dateNow, lastLogin: dateNow });
            return usuario.save(cb);
        }
        usuario0.set({ lastLogin: dateNow });
        return usuario0.save(cb);
    });
}

exports.obter = (email, cb) => {
    exports.Usuario.findOne({ email: email }, (err, usuario) => {
        if (err) cb(err);
        if (usuario === null) {
            return cb(new UsuarioNaoEncontradoError(email));
        }
        return cb(null, usuario);
    });
}

exports.adicionarContaCartola = (email, contaCartola, cb) => {
    exports.Usuario.findOne({ email: email }, (err, usuario) => {
        if (err) cb(err);
        if (usuario === null) {
            return cb(new UsuarioNaoEncontradoError(email));
        }
        if (usuario.contasCartola.find(element => element.email === contaCartola.email)) {
            return cb(new ContaCartolaJaExisteError(contaCartola.email));
        }
        usuario.contasCartola.push(contaCartola);
        return usuario.save(cb);
    });
}

exports.removerContaCartola = (email, idContaCartola, cb) => {
    exports.Usuario.findOne({ email: email }, (err, usuario) => {
        if (err) cb(err);
        if (usuario === null) {
            return cb(new UsuarioNaoEncontradoError(email));
        }        
        let contaParaRemover = { _id: idContaCartola };
        if (contaParaRemover === null) {
            return cb(new ContaCartolaNaoExisteError());  
        }
        usuario.contasCartola.id(idContaCartola).remove();
        return usuario.save(cb);    
    });
}

exports.limparContasCartola = (email, cb) => {
    exports.Usuario.findOne({ email: email }, (err, usuario) => {
        if (err) cb(err);
        if (usuario === null) {
            return cb(new UsuarioNaoEncontradoError(email));
        }
        usuario.set({contasCartola: [] });
        return usuario.save(cb);
    });
}