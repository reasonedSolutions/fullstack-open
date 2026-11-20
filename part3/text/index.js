const express = require('express')
const app = express()
const Note = require('./models/note')

let notes = [
  {
    id: '6af63b084b84036021667fa1',
    content: 'HTML is easy',
    important: true,
  },
  {
    id: '6af63b152225c0c250906937',
    content: 'CSS is hard',
    important: true,
  },
  {
    id: '6af63b223b7fc8a439dff67e',
    content: 'Mongoose makes things easy',
    important: true,
  },
]

app.use(express.json())
app.use(express.static('public'))

const generateId = () => {
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((n) => Number(n.id))) : 0
  return String(maxId + 1)
}

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id)
    .then(note => {
      if (note) {
        response.json(note)
      }
      else {
        response.status(404).end()
      }
    })
    .catch ( error => {
      console.log("error ==> ", error);
      response.status(500).end()
    })
})

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing',
    })
  }

  const note = Note({
    content: body.content,
    important: body.important || false,
  })

  note.save().then( savedNote => {
    response.json(savedNote)
  })
})

app.delete('/api/notes/:id', (request, response) => {
  const id = request.params.id
  notes = notes.filter((note) => note.id !== id)

  response.status(204).end()
})

app.put('/api/notes/:id', (request, response) => {
  const incoming = request.body
  if (notes.find(n => n.id === incoming.id)) {
    notes = notes.map( n => n.id === incoming.id ? incoming : n )
    response.status(200)
      .json(incoming)
      .end
  }
  else {
    response.status(400)
      .json({ "error": "That note was not found."})
      .end
  }
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})