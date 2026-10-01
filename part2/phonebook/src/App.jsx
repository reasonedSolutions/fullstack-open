import { useEffect, useState } from 'react'
import NameFilter from './components/NameFilter'
import EntryForm from './components/EntryForm'
import DisplayNames from './components/DisplayNames'
import PersonService from './services/PersonService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    PersonService
      .getAll()
      .then(data => {
        setPersons(data)
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
      PersonService
        .create(newPerson)
        .then(data => setPersons(persons.concat(data)))
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
      <DisplayNames persons={persons} nameFilter={nameFilter}/>
    </>
  )
}

export default App