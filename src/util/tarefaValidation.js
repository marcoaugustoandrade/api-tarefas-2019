const {check} = require('express-validator')

exports.listarPorDatas = [
  check('data_inicial')
  .exists().withMessage('A data inicial não pode estar em branco')
  .isLength({min:10}).withMessage("A data inicial deve ter no minimo 10 caracteres (AAAA-mm-dd)"),
  check('data_final')
  .exists().withMessage('A data final não pode estar em branco')
  .isLength({min:10}).withMessage("A data final deve ter no minimo 10 caracteres (AAAA-mm-dd)")
]
