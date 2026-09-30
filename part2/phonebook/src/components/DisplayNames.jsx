import Person from './Person'

const DisplayNames = ({persons, nameFilter}) => {
  return (
    <ul>
      {persons
        .filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
        .map(person => <Person key={person.name} person={person}/>)}
    </ul>
  )
}

export default DisplayNames