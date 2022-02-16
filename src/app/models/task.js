const mongoose = require('../../database')
//bcrypt é uma biblioteca para encriptação de senhas
// const bcrypt = require('bcryptjs')

//Schema é mais ou menos os campos do banco de dados
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        require: true,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    completed: {
        type: Boolean,
        require: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task