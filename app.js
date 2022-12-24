const express = require('express')
const port = 3000
const exphds = require('express-handlebars')
const app = express()
app.engine('handlebars', exphds({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 處理URL-encoded 擺在路由設定之前
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body)
  res.render('index')
})

app.listen(port, () => {
  console.log(`The server is on http://localhost:${port}`)
})