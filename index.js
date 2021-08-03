const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})
app.all('*', (request, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(1337)
// eslint-disable-next-line no-console
console.log('yay server is up')
