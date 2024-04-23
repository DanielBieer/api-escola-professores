const { Router } = require('express') // 
const Aluno = require('../models/Aluno')

const { auth } = require('../middleware/auth')
const AlunoController = require('../controllers/AlunoController')

const alunoRoutes = new Router()

/* ROTAS */
alunoRoutes.post('/', AlunoController.cadastrar)

alunoRoutes.get('/', auth, AlunoController.listar)

alunoRoutes.get('/:id', auth, AlunoController.listarUm)

module.exports = alunoRoutes