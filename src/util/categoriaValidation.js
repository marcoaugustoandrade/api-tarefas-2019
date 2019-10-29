
const { check } = require('express-validator')

exports.listarPorId = [
  check('id')
  .exists().withMessage('O id não pode estar em branco')
  .isInt().withMessage('O id deve ser um número inteiro')
]

exports.inserir = [
    check('descricao').exists().trim().isLength({min:1}).withMessage('A descrição não pode estar em branco.'),
    check('cor').exists().isHexColor().withMessage('A cor informada precisa ser em formato Hexadecimal.')
]

