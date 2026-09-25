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
  const total = parts.reduce((accumulator, currentValue) => {
    return (
      accumulator + currentValue.exercises
    ) 
  }, 0)

  return (
    <p><strong>total of {total} exercises</strong></p>
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
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <Course course={course}/>
  )
}

export default App