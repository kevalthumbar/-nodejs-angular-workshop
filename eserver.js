const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about')
})
app.get('/number', (req, res) => {
  res.send('12348')
})
app.get('/home', (req, res) => {
  res.send('address-junagadh')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})