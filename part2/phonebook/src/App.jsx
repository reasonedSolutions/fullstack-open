import { useState } from 'react'

const Display = ({persons}) => {
  return (
    <div>
      {persons.map(person => <li key={person.name}>{person.name}</li>)}
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNewSubmission = (event) => {
    event.preventDefault()
    const newNameExists = (persons.filter(p => p.name === newName).length !== 0)
    if (newNameExists) {
      alert(`${newName} has already been added to the phonebook`)
    }
    else {
      const newPerson = {
        name: newName
      }
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
      </div>
      <form onSubmit={handleNewSubmission}>
          name: <input value={newName} onChange={handleNameChange}/>
          <div>
            <button type="submit">add</button>
          </div>
      </form>
      <div>
        <h2>Numbers</h2>
        <Display persons={persons}/>
      </div>
    </div>
  )
}

export default App