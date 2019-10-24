const {check} = require('express-validator')


exports.deletar = [
  check('id')
  .exists().withMessage('O id não pode estar em branco')
  .isInt().withMessage('O id deve ser um número inteiro')
]

exports.listarPorDesc = [
  check('desc')
  .isLength({min:3,}).withMessage("A descrição deve ter no minimo 3 caracteres")
  .exists().withMessage('O descrição não pode estar em branco')
  .isString().withMessage('A descrição deve ser um texto')
  
]
