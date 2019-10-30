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

exports.alterar = (req, res) => {

  const erros = validationResult(req)
  if (!erros.isEmpty()){
    return res.status(422).json({"erros": erros.array()})
  } else {

    const categoria = []
    categoria.push(req.body.descricao)
    categoria.push(req.body.cor)
    categoria.push(req.params.id)

    const query = "update categorias set descricao = ?, cor = ? = ? where id = ?"

    conexao.query(query, categoria, (err, rows) => {
      if (err){
        res.status(500)
        res.json({"message": "Internal Server Error"})
        console.log(err)
      } else if (rows.affectedRows > 0){
        res.status(202)
        res.json({"message": "Categoria alterada", "id": req.params.id})
      } else {
        res.status(404)
        res.json({"message": "Nenhuma categoria cadastrada com esse id"})
      }
    })
  }
}
