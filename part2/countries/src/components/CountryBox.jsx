import { useEffect, useState } from 'react';
import weatherService from '../services/weatherService';
import CountryBasic from './CountryBasic'
import CountryLanguage from './CountryLanguage'
import CapitalWeather from './CapitalWeather'

const CountryBox = ({country}) => {
    const flagURL = country.flags.png
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const countryLat = country.capitalInfo.latlng[0]
        const countryLong = country.capitalInfo.latlng[1]
        weatherService.getWeather(countryLat, countryLong).then(setWeather)
    }, [country])

    return (
        <div>
            <CountryBasic country={country} />
            <CountryLanguage languages={country.languages} />
            <img src={flagURL}/>
            <CapitalWeather capital={country.capital[0]} weather={weather} />
        </div>
    )
}

export default CountryBox