import Person from './Person'

const DisplayNames = ({people, nameFilter, handleDelete}) => {
  return (
    <ul>
      {people
        .filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
        .map(person => <Person key={person.name} person={person} handleDelete={handleDelete}/>)}
    </ul>
  )
}

export default DisplayNames