const { BaseError } = require('make-error');

const SanMartinError = class extends BaseError {
    constructor(log = 'Erro genérico.', message = 'Falha de comunicação.', innerErr = undefined) {
      if (innerErr instanceof Error) {
        log = innerErr.message;
        if (innerErr.name === 'MongoError') {          
          message = SanMartinError.mapMongoMessage(innerErr);
        } else if (innerErr.name === 'ValidationError') {
          message = SanMartinError.mapValidationErrorMessage(innerErr);
        } else {
          message = innerErr.message;
        }
      }

      super(message);
      this.name = 'SanMartinError';
      this.log = log;
      this.code = 12000;
      if (innerErr instanceof Error) {
        this.innerErr = innerErr;
        this.code = innerErr.code;
        this.subName = innerErr.name;
      }
    }

    static mapValidationErrorMessage(err) {
      let errmsgs = [];
      let keys = Object.keys(err.errors);
      for (let i = 0; i < keys.length; i++) {
        errmsgs.push(err.errors[keys[i]].message);
      }
      return 'Verifique os campos inválidos: ' + errmsgs.join(', ');
    }

    static mapMongoMessage(err) {
      if (err.code === 11000) { //Chave duplicada
        if (err.method === 'PUT') {
          if (err.originalUrl === '/usuario') {
            return 'Usuário já cadastrado';
          }
        }
        return 'Registro duplicado';
      }
    }

    static makeError(err) {
      return new SanMartinError(undefined, undefined, err);
    }
}

exports.SanMartinError = SanMartinError;

exports.UsuarioNaoEncontradoError = class extends SanMartinError {
  constructor(email) {
    super(`Usuário ${email} não encontrado`, `Usuário ${email} não encontrado`);
    this.subName = 'UsuarioNaoEncontradoError';
    this.code = 12001;
  }
}

exports.DeveEstarLogadoError = class extends SanMartinError {
  constructor() {
    super('Faça login para realizar esta operação.', 'Faça login para realizar esta operação.');
    this.subName = 'DeveEstarLogadoError';
    this.code = 12002;
  }
}

exports.ContaCartolaJaExisteError = class extends SanMartinError {
  constructor(email) {
    super(`A conta ${email} já existe`, `A conta ${email} já existe`);
    this.subName = 'ContaCartolaJaExisteError';
    this.code = 12003;
  }
}

exports.ContaCartolaNaoExisteError = class extends SanMartinError {
  constructor(email) {
    super(`A conta ${email} não existe`, `A conta ${email} não existe`);
    this.subName = 'ContaCartolaNaoExisteError';
    this.code = 12004;
  }
}

exports.ParametroInvalidoError = class extends SanMartinError {
  constructor(parametro) {
    super(`Parâmetro inválido: ${parametro}`, `Parâmetro inválido: ${parametro}`);
    this.subName = 'ParametroInvalidoError';
    this.code = 12004;
  }
}

exports.exports = class extends SanMartinError {
  constructor(parametro) {
    super(`Cartola Error: ${parametro}`, `Cartola Error: ${parametro}`);
    this.subName = 'CartolaError';
    this.code = 13000;
  }
}