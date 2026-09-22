import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
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

const Statistics = ({stats, all}) => {
  if (!all) {
    return (
      <div>No feedback given</div>
    )
  }
  else {
    return (
      <div>
        {stats.map(stat => <StatLine key={stat.type} {...stat} />)}
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const incrementValue = (variable, setter) => {
    setAll(all + 1)
    return(
      setter(variable + 1)
    )
  }

  const average = (good-bad)/(all)
  const percentage = (good/all)*100
  const stats = [
    { type:'good', number:good },
    { type:'neutral', number:neutral },
    { type:'bad', number:bad },
    { type:'average', number:average },
    { type:'percentage', number:percentage, sign:'%' },
  ]

  return (
    <>
      <Header text='give feedback'/>
      <Button onClick={() => {incrementValue(good, setGood)}} text='good'/>
      <Button onClick={() => {incrementValue(neutral, setNeutral)}} text='neutral'/>
      <Button onClick={() => {incrementValue(bad, setBad)}} text='bad'/>
      <Header text='statistics'/>
      <Statistics stats={stats} all={all}/>
    </>
  )
}

export default App