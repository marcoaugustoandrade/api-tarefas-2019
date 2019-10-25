const conexao = require('../config/conexao')
const { validationResult } = require('express-validator')

exports.listarPorId = (req, res) => {

  const erros = validationResult(req)
  if(!erros.isEmpty()){
    return res.status(422).json({"erros": erros.array()})
  }else{
  
    const id = req.params.id
    const query = "select * from categorias where id = ?"

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
        res.json({"message": "Nenhuma categoria encontrada"})
      }
    })
  }  
}


