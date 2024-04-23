const Professor = require("../models/Professor")


class ProfessorController {
    /* POST */ 
    async cadastrar(req, res){
        try {
            const email = req.body.email
            const password = req.body.password
            const nome = req.body.nome
            const data_nascimento = req.body.data_nascimento
            
            if (!nome) {
                return res.status(400).json({ message: 'O nome é obrigatório' })
            }
    
            if (!data_nascimento) {
                return res.status(400).json({ message: 'A data de nascimento é obrigatória' })
            }
    
            if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
                return res.status(400).json({ message: 'A data de nascimento é não está no formato correto' })
            }
    
            const professor = await Professor.create({
                email: email,
                password: password,
                nome: nome,
                data_nascimento: data_nascimento,
                celular: celular
            })
    
            res.status(201).json(professor)
    
        } catch (error) {
            console.log(error.message)
            res.status(500).json({ error: 'Não possível cadastrar o professor' })
        }
}
    /*  GET */
    async listar(req, res){
    const professores = await Professor.findAll()
    res.json(professores)
}
    /* GET ID */
    async listarUm(req, res){
    try {

        const { id } = req.params

        const professor = await Professor.findByPk(id)

        if (!professor) {
            return res.status(404).json({ message: "Usuário não encontrado!" })
        }

        res.json(professor)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            error: 'Não possível listar o professor especifico',
            error: error
        })
    }
}


    /* PUT */
    async atualizarAluno(req, res){
        const { id } = req.params

        const professor = await Professor.findByPk(id)
    
        if (!professor) {
            return res.status(404).json({ message: 'Professor não encontrado' })
        }
    
        curso.update(req.body)
    
        await professor.save()
    
        res.json(professor)
    }

    /* DELETE */
    async deletarAluno(req, res){
        const { id } = req.params

        Professor.destroy({
            where: {
                id: id
            }
        }) 
    
        res.status(204).json({})
    }

}




module.exports = new ProfessorController()