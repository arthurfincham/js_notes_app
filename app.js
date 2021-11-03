const express = require('express'),
      Notes = require('./src/notes'),
      app = express(),
      port = 3000,
      notes = new Notes();

app.use(express.json());

app.get('/', (req, res) => {
  res.sendfile('index.html')
})

app.get('/notes', (req, res) => {
  responseObject = JSON.stringify(notes.all());
  res.send(responseObject);
})

app.post('/notes', (req, res) => {
  const newNote = { title: req.body.title, content: req.body.content };

  notes.add(newNote)
  res.send(newNote);
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})
