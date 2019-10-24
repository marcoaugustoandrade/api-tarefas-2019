const conexao = require('../config/conexao')
const { validationResult } = require('express-validator')

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
