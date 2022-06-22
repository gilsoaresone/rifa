const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid')





const userSchema = mongoose.Schema({

    _id: {
        type: 'object',
        value: { type: 'Buffer' },
        default: () => uuidv4(),
    },
    numero: {
        type: Number,
        required: true,
        unique: true

    },
    nome: {
        type: String,
        required: true
    },
 

});

module.exports = mongoose.model('User', userSchema);
