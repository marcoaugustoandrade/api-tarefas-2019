const { check } = require ('express-validator')

exports.inserir = [
    check('descricao').exists().trim().isLength({min:1}).withMessage('A descrição não pode estar em branco.'),
    check('cor').exists().isHexColor().withMessage('A cor informada precisa ser em formato Hexadecimal.')
]