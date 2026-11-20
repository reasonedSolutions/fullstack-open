const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(express.json())
app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))
app.use(express.static('public'))
app.use(cors())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

let people = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

const generateId = () => Math.floor(Math.random() * 10000).toString()

app.get('/api/people', (request, response) => {
  Person.find({}).then( people => response.json(people))
})

app.get('/info', (request, response) => {
  response.send(`
    <p>
      Phonebook has info for ${people.length} people
    </p>
    <p>
      ${new Date()}
    </p>
  `)
})

app.get('/api/people/:id', (req, res) => {
  const data = people.find(p => p.id === req.params.id)
  if (data) {
    res.json(data)
  }
  else {
    res.status(404)
      .send(`No contact found at ID # ${req.params.id}.`)
      .end
  }
})

app.delete('/api/people/:id', (req, res) => {
  people = people.filter(p => p.id !== req.params.id)
  res.status(204)
    .send(`Contact at ${req.params.id} deleted.`)
    .end
})

app.post('/api/people', (req, res) => {
  if (!req.body.name) {
    res.status(400)
      .json({ "error": "Name missing"})
      .end
  }
  else if (!req.body.number) {
    res.status(400)
      .json({ "error": "Number missing"})
      .end
  }
  else if (people.find(p => p.name === req.body.name)) {
    res.status(400)
      .json({ "error": "Name already exists in phonebook."})
      .end
  }
  else {
    newPerson = {"id": generateId(), ...req.body }
    people = people.concat(newPerson)
    res.status(200)
      .json(newPerson)
      .end
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})