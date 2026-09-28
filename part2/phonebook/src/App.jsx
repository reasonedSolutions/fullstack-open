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
    console.log("event ==> ", event.target);
    event.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log("event ==> ", event.target);
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