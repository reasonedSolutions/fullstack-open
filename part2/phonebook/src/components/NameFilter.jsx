const NameFilter = ({nameFilter, handler}) => (
  <div>Filter phonebook by name: <input value={nameFilter} onChange={handler}/></div>
)

export default NameFilter