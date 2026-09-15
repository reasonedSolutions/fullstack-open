const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.trait}</p>
    </div>
  )
}

const App = () => {
  console.log("hello from component")

  const friends = [ 'Tan', 'Yuxin' ]
  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Ka Ming' trait='anxious'/>
      <Hello name= 'Leo' trait='industrious'/>
      <Hello name='Andy' trait='chill'/>
      <p>{friends}</p>
    </>
  )
}

export default App