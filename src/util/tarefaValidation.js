const {check} = require('express-validator')

exports.listarPorDatas = [
  check('data_inicial')
  .exists().withMessage('A data não pode estar em branco')
  .isISO8601().withMessage('informe uma data valida'),
  check('data_final')
  .exists().withMessage('A data não pode estar em branco')
  .isISO8601().withMessage('informe uma data valida')
]
