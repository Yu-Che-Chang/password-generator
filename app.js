const express = require('express')
const port = 3000
const exphds = require('express-handlebars')
const app = express()
const generatePassword = require('./generate-password')

app.engine('handlebars', exphds({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 處理URL-encoded 擺在路由設定之前
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(req.body)
  res.render('index', {password , options})
})

app.listen(port, () => {
  console.log(`The server is on http://localhost:${port}`)
})