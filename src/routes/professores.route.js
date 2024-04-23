const { Router } = require('express')
const { auth } = require('../middleware/auth')
const ProfessorController = require('../controllers/ProfessorController')


const professorRoutes = new Router()

/* ROTAS */
professorRoutes.post('/', ProfessorController.cadastrar)

professorRoutes.get('/', auth, ProfessorController.listar)

professorRoutes.get('/:id', auth, ProfessorController.listarUm)

professorRoutes.put('/:id', auth, ProfessorController.atualizarAluno)

professorRoutes.delete('/:id', auth, ProfessorController.deletarAluno)

module.exports = professorRoutes