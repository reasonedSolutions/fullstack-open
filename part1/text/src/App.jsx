import { useState } from 'react'
const Display = (props) => {
  return (
    <div>{props.count}</div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handler}>
      {props.text}
    </button> 
  )
}

const App = () => {
  const [count, setCount] = useState(0)

  const addOne = () => {
    setCount(count + 1)
  }

  const resetZero = () => {
    setCount(0)
  }

  const subtractOne = () => {
    setCount(count - 1)
  }

  return(
    <div>
      <Display count={count}/>
      <Button handler={addOne} text='plus'/>
      <Button handler={subtractOne} text='minus'/>
      <Button handler={resetZero} text='reset'/>
    </div>
  )

}

export default App