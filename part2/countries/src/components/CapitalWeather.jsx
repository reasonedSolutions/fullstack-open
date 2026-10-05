const CapitalWeather = ({capital, weather}) => {
    if (weather) {
        const weatherIcon = `https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`

        return (
            <div>
                <h2>Weather in {weather.name}, {capital}</h2>
                <p>Temperature {(weather.main.temp-273.15).toFixed(2)} degrees Celsius</p>
                <img src={weatherIcon} />
                <p>Wind {weather.wind.speed} m/s</p>
            </div>
        )
    }
}



export default CapitalWeather