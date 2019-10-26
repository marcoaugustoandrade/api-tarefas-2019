
//buscando a conexão com o bd
const conexao = require('../config/conexao')
//buscando validação
const {validationResult} = require('express-validator')


exports.deletar = (req, res) => {
  const erros = validationResult(req)

  if (!erros.isEmpty()) {
    return res.status(422).json({"erro":erros.array()})
  }else{
  const id = req.params.id

  const query = "delete from categorias where id = ? "

  conexao.query(query, id, (err, rows) => {
    if (err){
      res.status(500)
      res.json({"message": "Internal Server Error",
                "erro":"Essa categoria pode estar sendo usada por uma tarefa"})
      console.log(err)
    } else if (rows.affectedRows > 0){
      res.status(200)
      res.json({"message": "Categoria deletada", "id": id})
    } else {
      res.status(404)
      res.json({"message": "Categoria não encontrada"})
    }
  })
}
}

exports.listarPorDesc = (req, res) => {
  const erros = validationResult(req)

  if (!erros.isEmpty()) {
    return res.status(422).json({"erro":erros.array()})
  }else{


  const desc = req.params.desc
  const query = "select * from categorias where descricao like '%"+desc+"%'"

  conexao.query(query, [desc], (err, rows) => {
    if (err){
      res.status(500)
      res.json({"message": "Internal Server Error",
      "erro":err})
      console.log(err)
    } else if (rows.length > 0){
      res.status(200)
      res.json(rows)
    } else {
      res.status(404)
      res.json({"message": "Nenhuma categoria encontrada"})
    }
  })
}}


