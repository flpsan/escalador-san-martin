const mongoose = require('mongoose');

let uri = 'mongodb://flpsan:um2345678@ds145289.mlab.com:45289/escalador-san-martin';
if (process.env.isDev) {
    uri = 'mongodb://localhost:27017/san-martin';
}

const options = { useNewUrlParser: true };

console.log(uri);

exports.start = () => {
    mongoose.connect(uri, options).then(
        () => { console.log('Conectado com sucesso no Mongo.'); },
        err => console.log('Erro de conexão com o Mongo.')
    );
};