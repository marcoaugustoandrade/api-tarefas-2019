const conexao = require('../config/conexao')
const { validationResult } = require('express-validator')

exports.listar = (req, res) => {

  const query = "select * from categorias"

  conexao.query(query , (err, rows) =>{
      if(err){
          res.status(500)
          res.json({"message" : "Internal Server Error"})
          console.log(err)
      }else if(rows.length > 0){
          res.status(200)
          res.json(rows)
      }else{
          res.status(404)
          res.json({"message": "Nenhuma Tarefa Encontrada"})
      }
  })
}

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

    const query = "update categorias set descricao = ?, cor = ?  where id = ?"

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

exports.listarPorId = (req, res) => {

  const erros = validationResult(req)
  if(!erros.isEmpty()){
    return res.status(422).json({"erros": erros.array()})
  }else{
  
    const id = req.params.id
    const query = "select * from categorias where id = ?"

    conexao.query(query, [id], (err, rows) => {

      if(err){
          res.status(500).json({"message":"Internal Server Error"})
          console.log(err)
      } else if (rows.length > 0){
        res.status(200)
        res.json(rows)
      } else {
        res.status(404)
        res.json({"message": "Nenhuma categoria encontrada"})
      }
    })
  }  
}

exports.inserir = (req, res) =>{

  const erros = validationResult(req)
  if(!erros.isEmpty()){
      return res.status(422).json({"erros":erros.array()})
  }else{
     const categoria = []

     categoria.push(req.body.descricao)
     categoria.push(req.body.cor)

     const query = 'insert into categorias(descricao,cor) values(?,?)'

     conexao.query(query,categoria, (error, rows) =>{
         if(error){
             res.status(500).json({"message":"Internal Server Error"})
             console.log(error)
         }else{
             res.status(201).json({"message":"Categoria inserida com sucesso","id":rows.insertId})
         }
     })
 
  }
}


