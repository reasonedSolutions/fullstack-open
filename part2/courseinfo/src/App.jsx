const Course = ({course}) => {
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = ({name}) => ( <h1>{name}</h1>)

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(p => <Part key={p.name} name={p.name} exercises={p.exercises}/>)}
    </div>
  )
}

const Part = ({name, exercises}) =>( <p>{name} {exercises}</p>)

const Total = ({parts}) => {
  var total = 0
  parts.forEach(p => total += p.exercises)

  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
      {
        name: 'Javascript arrays',
        exercises: 5
      }
    ]
  }

  return (
    <Course course={course}/>
  )
}

export default App