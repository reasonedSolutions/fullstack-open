const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.trait}</p>
    </div>
  )
}

const App = () => {
  const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',

    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
    doAddition: function(a, b) {
    console.log(a + b)
    },
  }

  arto.ageUp = function() {
    this.age++
    console.log('I am now ' + this.age + ' years old.')
  }

  arto.doAddition(1,4)
  const referencetoAddition = arto.doAddition
  referencetoAddition(10,20)

  arto.greet()  // "hello, my name is Arto Hellas" gets printed
  arto.ageUp() 
  setTimeout(arto.greet, 1000)
  return (
    <>
    </>
  )
}

export default App