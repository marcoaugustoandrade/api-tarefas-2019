const conexao = require('../config/conexao')
const {validationResult} = require('express-validator')

exports.listar = (req, res) => {
  
  const query = "select * from tarefas"

  conexao.query(query, (err, rows) => {
    if (err){
      res.status(500)
      res.json({"message": "Internal Server Error"})
      console.log(err)
    } else if (rows.length > 0){
      res.status(200)
      res.json(rows)
    } else {
      res.status(404)
      res.json({"message": "Nenhuma tarefa encontrada"})
    }
  })
}

exports.listarPorId = (req, res) => {

  const id = req.params.id
  const query = "select * from tarefas where id = ?"

  conexao.query(query, [id], (err, rows) => {
    if (err){
      res.status(500)
      res.json({"message": "Internal Server Error"})
      console.log(err)
    } else if (rows.length > 0){
      res.status(200)
      res.json(rows)
    } else {
      res.status(404)
      res.json({"message": "Nenhuma tarefa encontrada"})
    }
  })
}


exports.inserir = (req, res) => {

  const tarefa = []
  tarefa.push(req.body.descricao)
  tarefa.push(req.body.data)
  tarefa.push(req.body.realizado)
  tarefa.push(req.body.categoria_id)

  const query = "insert into tarefas (descricao, data, realizado, categoria_id) values (?, ?, ?, ?)"

  conexao.query(query, tarefa, (err, rows) => {

    if (err){
      res.status(500)
      res.json({"message": "Internal Server Error"})
      console.log(err)
    } else {
      res.status(201)
      res.json({"message": "Tarefa criada com sucesso", "id": rows.insertId})
    }
  })
}

exports.alterar = (req, res) => {

  const tarefa = []
  tarefa.push(req.body.descricao)
  tarefa.push(req.body.data)
  tarefa.push(req.body.realizado)
  tarefa.push(req.body.categoria_id)
  tarefa.push(req.params.id)

  const query = "update tarefas set descricao = ?, data = ?, realizado = ?, categoria_id = ? where id = ?"

  conexao.query(query, tarefa, (err, rows) => {
    if (err){
      res.status(500)
      res.json({"message": "Internal Server Error"})
      console.log(err)
    } else if (rows.affectedRows > 0){
      res.status(202)
      res.json({"message": "Tarefa alterada", "id": req.params.id})
    } else {
      res.status(404)
      res.json({"message": "Tarefa não encontrada "})
    }
  })
}

exports.deletar = (req, res) => {

  const id = req.params.id

  const query = "delete from tarefas where id = ?"

  conexao.query(query, [id], (err, rows) => {
    if (err){
      res.status(500)
      res.json({"message": "Internal Server Error"})
      console.log(err)
    } else if (rows.affectedRows > 0){
      res.status(200)
      res.json({"message": "Tarefa deletada", "id": id})
    } else {
      res.status(404)
      res.json({"message": "Tarefa não encontrada"})
    }
  })
}

exports.listarPorDescricao = (req, res) => {

  const erros = validationResult(req)
    if(!erros.isEmpty()){
        return res.status(422).json({"erros": erros.array()})
    } else {
  let descricao = req.params.descricao
  descricao = '%'+descricao+'%'
  const query = "select * from tarefas where descricao like ?"

  conexao.query(query, [descricao], (err, rows)=>{
    if (err){
      res.status(500)
      res.json({"message": "Internal Server "})
      console.log(err)
    } else if (rows.length > 0){
      res.status(200)
      res.json(rows)
    } else {
      res.status(404)
      res.json({"message": "Nenhuma descrição encontrada"})
    }
  })
}
}
