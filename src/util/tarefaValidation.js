const {check} = require('express-validator')

exports.listarPorDt = [
  check('data')
    .exists().withMessage('A data não pode estar vazio')
    .isLength({ min: 10 }).withMessage('A data deve ser conter no minimo 8 caracteres')
    .isISO8601().withMessage('A data deve estar no formato valido')
]
