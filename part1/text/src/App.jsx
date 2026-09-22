import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(0)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <Button onClick={() => setToValue(100)} text='hundred'/>
      <Button onClick={() => setToValue(0)} text='reset'/>
      <Button onClick={() => setToValue(value + 1)} text='increment'/>
    </div>
  )
}

export default App