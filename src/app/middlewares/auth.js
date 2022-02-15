const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth.json')

//next é chamado somente se o usuário estiver pronto para ir para o próximo passo
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).send({ error: 'No token provided' })
    }

    //Token começa sempre com a palavra Bearer seguindo de um hash
    const parts = authHeader.split(' ')

    if (!parts.length === 2) {
        return res.status(401).send({ error: 'Token error' })
    }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token malformatted' })
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Token invalid' })

        req.userId = decoded.id

        return next()
    })
}

/**
 * É bom fazer essas verificações mais simples(if), porque consome
 * pouco do nosso backend. Tentar fazer o máximo de validação simples
 * antes de fazer realmente uma validação pesada(diretamente no jwt), 
 * ajuda a deixar o backend melhor
 */