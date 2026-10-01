import Person from './Person'

const DisplayNames = ({persons, nameFilter, handleDelete}) => {
  return (
    <ul>
      {persons
        .filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
        .map(person => <Person key={person.name} person={person} handleDelete={() => handleDelete(person.id)}/>)}
    </ul>
  )
}

export default DisplayNames