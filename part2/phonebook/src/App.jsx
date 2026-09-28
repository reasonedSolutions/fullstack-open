import { useState } from 'react'

const Display = ({persons}) => {
  return (
    <div>
      {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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

  return (
    <>
      <h1>Phonebook</h1>
      <div>
        <h2>Add new entry:</h2>
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
        <Display persons={persons}/>
      </div>
    </>
  )
}

export default App