const conexao = require('../config/conexao')
const { validationResult } = require('express-validator')

// Listar pela categoria 
exports.listarPorCategoriaId = (req, res) =>{
    const erros = validationResult(req)
    if(!erros.isEmpty()){
        return res.status(422).json({"erros": erros.array()})
    }else{
        const categoria_id  = req.params.id
        const query = "select * from tarefas where categoria_id = ?"

        conexao.query(query, [categoria_id], (err, rows)=>{
            if(err){const erros = validationResult(req)
                if(!erros.isEmpty()){
                    return res.status(422).json({"erros": erros.array()})
                }
                res.status(500)
                res.json({"message": "Internal Server Error"})
                console.log(err)
            }else if(rows.length > 0){
                res.status(200)
                res.json(rows)
            }else{
                res.status(404)
                res.json({"message": "Nenhuma Tarefa Encontra"})
            }
        })
    }

}