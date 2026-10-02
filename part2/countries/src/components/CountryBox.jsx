import CountryBasic from './CountryBasic'
import CountryLanguage from './CountryLanguage'

const CountryBox = ({country}) => {
    const flagURL = country.flags.png

    return (
        <div>
            <CountryBasic country={country} />
            <CountryLanguage languages={country.languages} />
            <img src={flagURL}/>
        </div>
    )
}

export default CountryBox