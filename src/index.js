const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const YAML = require('yamljs')
const swaggerUI = require('swagger-ui-express')
const bodyParser = require('body-parser')
const cors = require('cors')

//HABILITANDO O CORS
app.use(cors())



// TRANSFOMANDO O CORPO DA REQUISIÇÃO NO FORMATO JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))


// Logs
// LOGS
app.use(morgan('combined'))


//DODUMENTAÇÃO DA API
const swaggerDocument = YAML.load('./docs/swagger.yml')
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))


// ROTAS URN
const tarefaRoute = require('./routes/tarefaRoute')
const tarefaFiltroRoute = require('./routes/tarefaFiltroRoute')
const categoriaRoute = require('./routes/categoriaRoute')
// const categoriaFiltroRoute = require('./routes/categoriaFiltroRoute')
const apiRoute = require('./routes/apiRoute')

app.use('/api/v1', apiRoute)

app.use('/api/v1/tarefas', tarefaRoute)
app.use('/api/v1/tarefas/filtro', tarefaFiltroRoute)

app.use('/api/v1/categorias', categoriaRoute)
// app.use('/api/v1/categorias/filtro', categoriaFiltroRoute)

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta ${port}`);
  
})
