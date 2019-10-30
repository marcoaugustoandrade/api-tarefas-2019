const { check } = require('express-validator')

exports.listarPorCategoriaId = [
    check('id')
        .exists().withMessage('O id não pode estar em Branco')
        .isInt().withMessage('O id deve ser um número Inteiro')
]
exports.alterar = [
  check('id')
  .exists().isLength({min:1}).withMessage('O id não pode estar em branco')
  .isInt().withMessage('O id deve ser um número inteiro'),
  check('descricao').exists().trim().isLength({min:1}).withMessage('A descrição não pode estar em branco')
]

exports.deletar = [
  check('id')
  .exists().withMessage('O id não pode estar em branco')
  .isInt().withMessage('O id deve ser um número inteiro')
]

exports.listarPorId = [
  check('id')
  .exists().withMessage('O id não pode estar em branco')
  .isInt().withMessage('O id deve ser um número inteiro')
]

exports.listarPorDesc = [
  check('desc')
  .isLength({min:3}).withMessage("A descrição deve ter no minimo 3 caracteres")
  .exists().withMessage('O descrição não pode estar em branco')
  .isString().withMessage('A descrição deve ser um texto')
]
exports.inserir = [
    check('descricao').exists().trim().isLength({min:1}).withMessage('A descrição não pode estar em branco.'),
    check('cor').exists().isHexColor().withMessage('A cor informada precisa ser em formato Hexadecimal.')

]


