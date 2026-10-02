const CountryLanguage = ({languages}) => {
    const langKeys = Object.keys(languages)

    return (
        <div>
            <h2>Languages</h2>
            <ul>
                {langKeys.map(lk => <li key={lk}>{languages[lk]}</li>)}
            </ul>
        </div>
    )
}

export default CountryLanguage