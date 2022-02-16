const mongoose = require('../../database')
//bcrypt é uma biblioteca para encriptação de senhas
// const bcrypt = require('bcryptjs')

//Schema é mais ou menos os campos do banco de dados
const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Project = mongoose.model('Project', ProjectSchema)

module.exports = Project