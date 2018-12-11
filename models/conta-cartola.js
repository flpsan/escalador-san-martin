const mongoose = require('mongoose');

const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const contaCartolaSchema = new mongoose.Schema({ 
    email: { 
        type: String, 
        trim: true,
        required: [true, 'email é um campo obrigatório'],         
        validate: [validateEmail, 'email inválido'], 
    },
    senha: { 
        type: String, 
        trim: true,
        required: [true, 'senha é um campo obrigatório'] 
    }
});

exports.contaCartolaSchema = contaCartolaSchema;
exports.ContaCartola = mongoose.model('ContaCartola', contaCartolaSchema);

