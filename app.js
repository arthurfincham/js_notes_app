const express = require('express')
const Note = require('./src/note')
const Notes = require('./src/notes')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/new', (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.post('/new-note', (req, res) => {
  const title = req.params.title
  const content = req.params.content
  const newNote = new Note(title, content);
  res.send('New note created.')
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})