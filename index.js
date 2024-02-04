const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')

//the routes
const assemblyRoutes = require('./routes/assemblyRoutes')

const app = express();

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.use('/api', assemblyRoutes.router)

app.listen(config.port, () => console.log(`listening for requests at port ${config.port}`))