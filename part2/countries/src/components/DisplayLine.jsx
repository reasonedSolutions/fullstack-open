import CountryBox from './CountryBox'
import { useState } from 'react'

const DisplayLine = ({country}) => {
    const [show, setShow] = useState(false)

    return (
        <li>
            <div>
                {country.name.common}
                <button onClick={() => {
                    setShow(!show)
                }}>{show ? 'Hide' : 'Show'}</button>
            {show ? <CountryBox country={country} /> : <></>}
            </div>
        </li>
    )
}


export default DisplayLine