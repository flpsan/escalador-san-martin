import mongoose from 'mongoose';
import { UsuarioNaoEncontradoError, ContaCartolaJaExisteError, ContaCartolaNaoExisteError } from '../helpers/sanmartinerror';
import { contaCartolaSchema } from '../models/conta-cartola';

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

export const Usuario = mongoose.model('Usuario', usuarioSchema);

export function obterOuCriar(usuario, cb) {
    Usuario.findOne({ email: usuario.email }, (err, usuario0) => {
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

export function obter(email, cb) {
    Usuario.findOne({ email: email }, (err, usuario) => {
        if (err) cb(err);
        if (usuario === null) {
            return cb(new UsuarioNaoEncontradoError(email));
        }
        return cb(null, usuario);
    });
}

export function adicionarContaCartola(email, contaCartola, cb) {
    Usuario.findOne({ email: email }, (err, usuario) => {
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

export function removerContaCartola(email, idContaCartola, cb) {
    Usuario.findOne({ email: email }, (err, usuario) => {
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

export function limparContasCartola(email, cb) {
    Usuario.findOne({ email: email }, (err, usuario) => {
        if (err) cb(err);
        if (usuario === null) {
            return cb(new UsuarioNaoEncontradoError(email));
        }
        usuario.set({contasCartola: [] });
        return usuario.save(cb);
    });
}