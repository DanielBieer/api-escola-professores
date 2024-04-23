const { Router } = require('express') 
const { auth } = require('../middleware/auth')
const MatriculaController = require('../controllers/MatriculaController')

const matriculaRoutes = new Router()

/* ROTAS */
matriculaRoutes.post('/', auth, MatriculaController.cadastrar)


module.exports = matriculaRoutes