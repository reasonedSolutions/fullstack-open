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
    const existingPerson = persons.find(p => p.name === newName)
    const confirmReplace = name => 
      confirm(`${name} has already been added to the phonebook. Replace number?`)
    if (existingPerson) {
      if (confirmReplace(newName)) {
        const updatedPerson = {...existingPerson, number: newNumber}
        PersonService.update(existingPerson.id, updatedPerson)
          .then(data => {
            setPersons(persons.map(p => p.id === existingPerson.id ? updatedPerson : p))
          })
          .catch(e => alert(`Update failed, reason: ${e.message}`))
      }
    }
    else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      PersonService
        .create(newPerson)
        .then(data => setPersons(persons.concat(data)))
        .catch((e) => {
          alert(`Delete failed, reason: ${e.message}`)
        })
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

  const handleDelete = (person) => {
    if ((window.confirm(`Are you sure you want to delete ${person.name}?`))){
      PersonService
        .remove(person.id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
        .catch((e) => {
          alert(`Delete failed, reason: ${e.message}`)
        })
    }
  }

  return (
    <>
      <h1>Phonebook</h1>
      <NameFilter nameFilter={nameFilter} handler={handleFilterChange}/>
      <h2>Add new entry</h2>
      <EntryForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} handleNewSubmission={handleNewSubmission}/>
      <h2>Numbers</h2>
      <DisplayNames persons={persons} nameFilter={nameFilter} handleDelete={handleDelete}/>
    </>
  )
}

export default App