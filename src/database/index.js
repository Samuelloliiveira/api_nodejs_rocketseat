const mongoose = require('mongoose')

//useMongoClient é uma forma de se conectar com o mongo
mongoose.connect('mongodb://localhost/noderest')
mongoose.Promise = global.Promise //classe de promise //padrão de todo projeto

module.exports = mongoose