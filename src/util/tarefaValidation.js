const {check} = require('express-validator')
const tarefaController = require('../controllers/tarefaController')

exports.listarPorDt = [
  check('data')
    .exists().withMessage('A data não pode estar vazio')
    .isLength({ min: 10 }).withMessage('A data deve ser conter no minimo 8 caracteres')
    .isISO8601().withMessage('A data deve estar no formato valido')
  ]

exports.listarPorDatas = [
  check('data_inicial')
  .exists().withMessage('A data inicial não pode estar em branco')
  .isLength({min:10}).withMessage("A data inicial deve ter no minimo 10 caracteres (AAAA-mm-dd)"),
  check('data_final')
  .exists().withMessage('A data final não pode estar em branco')
  .isLength({min:10}).withMessage("A data final deve ter no minimo 10 caracteres (AAAA-mm-dd)")

]
exports.listarPorId = [
    check('id')

        .exists().withMessage('O id não pode estar em Branco')
        .isInt().withMessage('O id deve ser um número Inteiro')
]

exports.inserir = [
    check('descricao').exists().trim().withMessage('A Descrição não pode estar em branco'),
    check('categoria_id').exists().withMessage('O id da categoria nao pode esta em branco')
        .isInt().withMessage('O id da categoria deve ser um nuemro inteiro'),
    check('data')
        .exists().trim().withMessage('O campo data da categoria não pode ser vazio')
        .isLength({ min: 8 }).withMessage('A data deve ser conter no minimo 8 caracteres')
        .isISO8601().withMessage('A data deve estar no formato valido')

]

exports.alterar = [
    check('id').exists().withMessage('O id Não pode estar em branco')
               .isInt().withMessage('O id deve ser um numero inteiro'),
    check('descricao')
        .exists().trim().withMessage('A Descrição não pode estar em branco'),
    check('data')
        .exists().trim().withMessage('O campo data da categoria não pode ser vazio')
        .isLength({ min: 8 }).withMessage('A data deve ser conter no minimo 8 caracteres')
        .isISO8601().withMessage('A data deve estar no formato valido'),
    check('categoria_id')
        .exists().withMessage('O id da categoria nao pode esta em branco')
        .isInt().withMessage('O id da categoria deve ser um nuemro inteiro')
]       

exports.deletar = [
    check('id')
        .exists().withMessage('O id não pode estar em Branco')
        .isInt().withMessage('O id deve ser um número Inteiro')
]

      

exports.listarPorDescricao = [
    check('f')
        .exists().withMessage('A descrição não pode estar em branco!')
        .isLength({min:3}).withMessage('Por favor, informe mais de 2 caracteres!')
]
