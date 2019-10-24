const {check} = require('express-validator')


exports.listarPorDescricao = [
    check('descricao').exists().withMessage('A descrição não pode estar em branco!').isLength({min:3}).withMessage('Por favor, informe mais de 2 caracteres!')
]