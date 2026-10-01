const Person = (
  {person, handleDelete}) => (<li>{person.name} {person.number} <button onClick={() => handleDelete(person)}>delete {person.name}</button></li>
)

export default Person