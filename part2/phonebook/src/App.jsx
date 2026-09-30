import { useEffect, useState } from 'react'
import axios from 'axios'

const NameFilter = ({nameFilter, handler}) => (
  <div>Filter phonebook by name: <input value={nameFilter} onChange={handler}/></div>
)

const EntryForm = ({newName, handleNameChange, newNumber, handleNumberChange, handleNewSubmission}) => {
  return (
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
  )
}

const Display = ({persons, nameFilter}) => {
  return (
    <ul>
      {persons
        .filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
        .map(person => <Person key={person.name} person={person}/>)}
    </ul>
  )
}

const Person = (
  {person}) => (<li>{person.name} {person.number}</li>
)

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
      axios
        .post(`http://localhost:3001/persons`, newPerson)
        .then(response => setPersons(persons.concat(response.data)))
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
      <NameFilter nameFilter={nameFilter} handler={handleFilterChange}/>
      <h2>Add new entry</h2>
      <EntryForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} handleNewSubmission={handleNewSubmission}/>
      <h2>Numbers</h2>
      <Display persons={persons} nameFilter={nameFilter}/>
    </>
  )
}

export default App