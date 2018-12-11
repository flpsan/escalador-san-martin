const mongoose = require('mongoose');

const uri = process.env.isDev ? 
    'mongodb://localhost:27017/san-martin' : 
    'mongodb://flpsan:um2345678@ds145289.mlab.com:45289/escalador-san-martin';
const options = { useNewUrlParser: true };

exports.start = () => {
    mongoose.connect(uri, options).then(
        () => { console.log('conectado com sucesso'); },
        err => console.log('erro de conexão')
    );
};