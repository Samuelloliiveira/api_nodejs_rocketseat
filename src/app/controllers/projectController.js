const express = require('express')
const authMiddleware = require('../middlewares/auth')

const Project = require('../models/project')
const Task = require('../models/task')

const router = express.Router()

router.use(authMiddleware)

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find()

        return res.send({ projects })
    } catch (error) {
        return res.status(400).send({ error: 'Error loading projects' })
    }
})

router.get('/:projectId', (req, res) => {
    res.send({ user: req.userId })
})

router.post('/', async (req, res) => {
    try {
        const project = await Project.create({ ...req.body, user: req.userId })

        return res.send({ project })
    } catch (error) {
        return res.status(400).send({ error: 'Error creating new project' })
    }
})

router.put('/:projectId', (req, res) => {
    res.send({ user: req.userId })
})

router.delete('/:projectId', (req, res) => {
    res.send({ user: req.userId })
})

router.get('/:projectId')

module.exports = app => app.use('/projects', router)