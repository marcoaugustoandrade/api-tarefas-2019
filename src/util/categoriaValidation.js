const { check } = require('express-validator')

exports.alterar = [
  check('id')
  .exists().withMessage('O id não pode estar em branco')
  .isInt().withMessage('O id deve ser um número inteiro'),
  check('descricao').exists().trim().withMessage('A descrição não pode estar em branco'),
  check('cor').exists().withMessage('A cor não pode estar em branco')
]


