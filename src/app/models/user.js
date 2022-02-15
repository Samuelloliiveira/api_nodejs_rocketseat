const mongoose = require('../../database')
//bcrypt é uma biblioteca para encriptação de senhas
const bcrypt = require('bcryptjs')

//Schema é mais ou menos os campos do banco de dados
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true, //forçado a conversão para "caixa baixa"
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

//pre é uma função do mongoose para fazer algo antes de salvar
UserSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})


const User = mongoose.model('User', UserSchema)

module.exports = User