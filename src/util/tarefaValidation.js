const { check } = require('express-validator')

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
  