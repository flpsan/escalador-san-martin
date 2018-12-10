import mongoose from 'mongoose';

const uri = 'mongodb://localhost:27017/san-martin';
const options = { useNewUrlParser: true };

export function start () {
    mongoose.connect(uri, options).then(
        () => { console.log('conectado com sucesso') },
        err => console.log('erro de conexão')
    );
};