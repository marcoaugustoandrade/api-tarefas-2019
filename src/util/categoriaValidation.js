const { check } = require ('express-validator')

exports.inserir = [
    check('descricao').exists().trim().withMessage('A descrição não pode estar em branco.'),
    check('cor').exists().isHexadecimal().withMessage('A cor informada precisa ser em formato Hexadecimal.')
]