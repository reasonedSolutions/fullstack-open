const CountryBasic = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>
                <p><b>Capital:</b> {country.capital}</p>
                <p><b>Area:</b> {country.area}</p>
            </div>
        </div>
    )
}

export default CountryBasic 