import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBox from './components/SearchBox'
import DisplayBox from './components/DisplayBox'
import countryService from './services/countryService'

function App() {
  const [countries, setCountries] = useState(null)
  const [search, setSearch] = useState(null)

  useEffect(() => {
    // axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    //   .then((response) => (setCountries(response.data)))
    countryService.getAllCountries().then(r => setCountries(r.data))
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <SearchBox handleSearchChange={handleSearchChange} />
      {countries ? <DisplayBox countries={countries} search={search} /> : <div>fetching countries...</div>}
    </div>
  )
}

export default App
