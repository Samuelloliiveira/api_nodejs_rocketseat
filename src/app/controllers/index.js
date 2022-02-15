const fs = require('fs')
const path = require('path')

module.exports = app => {
    fs
        .readdirSync(__dirname) //lendo o diretório
        .filter(file => ((file.indexOf('.')) !== 0 && (file !== "index.js")))//filtando arquivos
        .forEach(file => require(path.resolve(__dirname, file))(app))//percorrendo arquivos e passando o app
}