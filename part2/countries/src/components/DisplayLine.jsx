import CountryBox from './CountryBox'
import { useState } from 'react'

const DisplayLine = ({country}) => {
    const [show, setShow] = useState(false)
    console.log(`show ${country.name.common} ==> `, show);

    return (
        <li>
            <div>
                {country.name.common}
                <button onClick={() => {
                    console.log(`${country.name.common} clicked`)
                    setShow(!show)
                }}>Show</button>
            </div>
            {show ? <CountryBox country={country} /> : <></>}
        </li>
    )
}


export default DisplayLine