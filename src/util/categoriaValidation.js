const { check } = require('express-validator')

exports.alterar = [
  check('id')
  .exists().isLength({min:1}).withMessage('O id não pode estar em branco')
  .isInt().withMessage('O id deve ser um número inteiro'),
  check('descricao').exists().trim().isLength({min:1}).withMessage('A descrição não pode estar em branco')
]


