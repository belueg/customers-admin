const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')
// middlewares
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
// routes
app.use('/users', require('./routes/users'))
app.use('/test', require('./routes/test'))

app.listen(port, () => console.log(`App listening on localhost:${port} port!`))
