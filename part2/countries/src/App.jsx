import { useState, useEffect } from 'react'
import axios from 'axios'

const SearchBox = ({search, handleSearchChange}) => {
  return (
    <form>
      find countries<input placeholder={search} onChange={handleSearchChange}></input>
    </form>
  )
}

function App() {
  const [countries, setCountries] = useState(null)
  const [search, setSearch] = useState('enter country name')

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then((response) => (setCountries(response.data)))
  }, [])

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }

  return (
    <div>
      <SearchBox search={search} handleSearchChange={handleSearchChange}/>
    </div>
  )
}

export default App
