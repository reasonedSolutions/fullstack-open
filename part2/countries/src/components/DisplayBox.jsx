import CountryBox from './CountryBox'

const DisplayBox = ({countries, search}) => {
  if (!search) return <></>
  else {
    const filteredCountries = countries
      .filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    const filteredLength = filteredCountries.length

    if (filteredLength > 10) {
      return <div>Too many matches ({filteredCountries.length}).</div>
    }

    else if (filteredLength > 1) {
      return (
        <ul>
          {filteredCountries.map(f => <li key={f.name.common}>{f.name.common}</li>)}
        </ul>
      )
    }

    else if (filteredLength === 1) {
      return (
        <CountryBox country={filteredCountries[0]} />
      )
    }
  }
}

export default DisplayBox