import { useEffect, useState } from 'react'
import axios from 'axios'
import NameFilter from './components/NameFilter'
import EntryForm from './components/EntryForm'
import DisplayNames from './components/DisplayNames'

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
      <DisplayNames persons={persons} nameFilter={nameFilter}/>
    </>
  )
}

export default App