const express = require('express')
const app = express()

app.use(express.json())

let persons = [
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

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/info', (request, response) => {
  response.send(`
    <p>
      Phonebook has info for ${persons.length} people
    </p>
    <p>
      ${new Date()}
    </p>
  `)
})

app.get('/api/persons/:id', (req, res) => {
  const data = persons.find(p => p.id === req.params.id)
  if (data) {
    res.json(data)
  }
  else {
    res.status(404)
      .send(`No contact found at ID # ${req.params.id}.`)
      .end
  }
})

app.delete('/api/persons/:id', (req, res) => {
  persons = persons.filter(p => p.id !== req.params.id)
  res.status(204)
    .send(`Contact at ${req.params.id} deleted.`)
    .end
})

app.post('/api/persons', (req, res) => {
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
  else if (persons.find(p => p.name === req.body.name)) {
    res.status(400)
      .json({ "error": "Name already exists in phonebook. missing"})
      .end
  }
  else {
    newPerson = {"id": generateId(), ...req.body }
    console.log("newPerson ==> ", newPerson);
    persons = persons.concat(newPerson)
    res.status(200)
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})