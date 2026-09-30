const EntryForm = ({newName, handleNameChange, newNumber, handleNumberChange, handleNewSubmission}) => {
  return (
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
  )
}

export default EntryForm