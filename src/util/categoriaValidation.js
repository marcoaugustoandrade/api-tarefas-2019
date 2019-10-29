const { check } = require('express-validator')


exports.listarPorId = [
  check('id')
  .exists().withMessage('O id não pode estar em branco')
  .isInt().withMessage('O id deve ser um número inteiro')
]

exports.inserir = [
  check('data')
  .exists.trim().withMessage('O campo data da categoria não pode ser vazio')
  .isLength({ min: 8 }).withMessage('A data deve ser conter no minimo 8 caracteres')
  .isISO8601().withMessage('A data deve estar no formato valido')
]

exports.alterar = [
  check('data')
  .exists.trim().withMessage('O campo data da categoria não pode ser vazio')
  .isLength({ min: 8 }).withMessage('A data deve ser conter no minimo 8 caracteres')
  .isISO8601().withMessage('A data deve estar no formato valido')
]

