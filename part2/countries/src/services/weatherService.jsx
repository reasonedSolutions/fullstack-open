import axios from 'axios'

const getWeather = (lat, long) => {
    const weatherKey = import.meta.env.VITE_OPENWEATHER_KEY
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherKey}`
    
    return axios.get(weatherURL)
        .then(r => r.data)
}

export default { getWeather }