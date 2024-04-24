const Aluno = require("../models/Aluno")
const Curso = require("../models/Curso")
const Matricula = require("../models/Matricula")


class MatriculaController{

    async cadastrar(req, res){

        try {
        const curso_id = req.body.curso_id //id do curso
        const aluno_id = req.body.aluno_id //id do aluno

        if(!curso_id || !aluno_id){
            return res.status(400).json({message: "o ID do aluno e do curso são obrigatórios."})
        }

        const aluno = await Aluno.findByPk(aluno_id)

        if(!aluno){
         return res.status(404).json({message: 'O aluno não existe'})
        }
 
       /* validar se já existe o mesmo curso para o mesmo aluno
        */
        const curso = await Curso.findByPk(curso_id)
        if(!curso) return res.status(404).json({message: 'O curso não existe.'})

        const matriculaExistente = await Matricula.findOne({
          where:  {aluno_id: aluno_id,
            curso_id: curso_id}
        })
        if(matriculaExistente){
            return res.status(409).json({message: 'Aluno já cadastrado para este curso.'})
        }

        const matricula = await Matricula.create({
            curso_id: curso_id,
            aluno_id: aluno_id
        })
        res.status(201).json(matricula)

        } catch{
            res.status(500).json({message: 'Não foi possível realizar a matrícula.'})
        }
        
}

}


module.exports = new MatriculaController()