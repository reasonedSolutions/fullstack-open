import { useEffect, useState } from 'react';
import CountryBasic from './CountryBasic'
import CountryLanguage from './CountryLanguage'
import CapitalWeather from './CapitalWeather'
import axios from 'axios'

const CountryBox = ({country}) => {
    const flagURL = country.flags.png

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const countryLat = country.capitalInfo.latlng[0]
        const countryLong = country.capitalInfo.latlng[1]
        const weatherKey = import.meta.env.VITE_OPENWEATHER_KEY
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${countryLat}&lon=${countryLong}&appid=${weatherKey}`
        axios.get(weatherURL)
            .then(r => {
            setWeather(r.data)
        })
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