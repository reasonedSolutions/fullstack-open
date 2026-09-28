import { useState } from 'react'

const Display = ({persons, nameFilter}) => {
  return (
    <ul>
      {persons
        .filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
        .map(person => <li key={person.name}>{person.name} {person.number}</li>)}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const handleNewSubmission = (event) => {
    event.preventDefault()
    const newNameExists = (persons.filter(p => p.name === newName).length !== 0)
    if (newNameExists) {
      alert(`${newName} has already been added to the phonebook`)
    }
    else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  return (
    <>
      <h1>Phonebook</h1>
      Filter phonebook by name: <input value={nameFilter} onChange={handleFilterChange}/>
      <div>
        <h2>Add new entry</h2>
        <form onSubmit={handleNewSubmission}>
          <div>
            name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
      <div>
        <h2>Numbers</h2>
        <Display persons={persons} nameFilter={nameFilter}/>
      </div>
    </>
  )
}

export default App