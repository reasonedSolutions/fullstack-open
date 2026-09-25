const Course = ({courses}) => {
  return (
    <>
      {courses.map(course =>
        <div key={course.name}>
          <Header name={course.name}/>
          <Content parts={course.parts}/>
          <Total parts={course.parts}/>
        </div>
      )}
    </>
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

export default Course