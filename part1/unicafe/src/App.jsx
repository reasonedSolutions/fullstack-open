import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Header = (props) => {
    return (
      <h2>{props.text}</h2>
    )
  }
  
  const Button = (props) => {
    return (
      <button onClick={props.onClick}>{props.text}</button>
    )
  }

  const StatLine = (props) => {
    return(
      <div>{props.type} {props.number}</div>
    )
  }

  return (
    <>
      <Header text='give feedback'/>
      <Button onClick={() => {setGood(good + 1)}} text='good'/>
      <Button onClick={() => {setNeutral(neutral + 1)}} text='neutral'/>
      <Button onClick={() => {setBad(bad + 1)}} text='bad'/>
      <Header text='statistics'/>
      <StatLine type='good' number={good}/>
      <StatLine type='neutral' number={neutral}/>
      <StatLine type='bad' number={bad}/>
    </>
  )
}

export default App