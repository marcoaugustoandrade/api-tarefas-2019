const {check} = require('express-validator')

exports.listarPorDt = [
  check('data')
    .exists().withMessage('A data não pode estar vazio')
    .isLength({ min: 10 }).withMessage('A data deve ser conter no minimo 8 caracteres')
    .isISO8601().withMessage('A data deve estar no formato valido')
]

exports.listarPorId = [
    check('id')
        .exists().withMessage('O id não pode estar em Branco')
        .isInt().withMessage('O id deve ser um número Inteiro')
]


exports.inserir = [
    check('descricao').exists().trim().withMessage('Adescrição não pode ficar me branco'),
    check('data').exists().withMessage('A data não pode estar em Branco'),
    check('categoria_id').exists().withMessage('O id da categoria não pode ficar em branco').isInt().withMessage('O id da categoria deve ser um número Inteiro')
]

exports.alterar = [
    check('id')
        .exists().withMessage('O id não pode estar em Branco')
        .isInt().withMessage('O id deve ser um número Inteiro'),
    check('descricao').exists().trim().withMessage('Adescrição não pode ficar me branco'),
    check('data').exists().withMessage('A data não pode estar em Branco'),
    check('categoria_id').exists().withMessage('O id da categoria não pode ficar em branco').isInt().withMessage('O id da categoria deve ser um número Inteiro') 
]

exports.deletar = [
    check('id')
        .exists().withMessage('O id não pode estar em Branco')
        .isInt().withMessage('O id deve ser um número Inteiro')
]
