import { useState } from 'react'

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
  if (isNaN(props.number)) {
    return (
      <div>{props.type}</div>
    )
  }
  return(
    <div>{props.type} {props.number} {props.sign}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const incrementValue = (variable, setter) => {
    setTotal(total + 1)
    return(
      setter(variable + 1)
    )
  }

  return (
    <>
      <Header text='give feedback'/>
      <Button onClick={() => {incrementValue(good, setGood)}} text='good'/>
      <Button onClick={() => {incrementValue(neutral, setNeutral)}} text='neutral'/>
      <Button onClick={() => {incrementValue(bad, setBad)}} text='bad'/>
      {/* <Button onClick={() => {setNeutral(neutral + 1)}} text='neutral'/> */}
      {/* <Button onClick={() => {setBad(bad + 1)}} text='bad'/> */}
      <Header text='statistics'/>
      <StatLine type='good' number={good}/>
      <StatLine type='neutral' number={neutral}/>
      <StatLine type='bad' number={bad}/>
      <StatLine type='all' number={total}/>
      <StatLine type='average' number={(good-bad)/(total)}/>
      <StatLine type='percentage' number={(good/total)*100} sign='%'/>
    </>
  )
}

export default App