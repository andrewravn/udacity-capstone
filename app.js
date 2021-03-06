const express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 8080

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./controllers'))

app.listen(port, () => console.log(`Listening on port ${port}`))
