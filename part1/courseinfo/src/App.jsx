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
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Footer course={course} />
    </div>
  )
}

const Header = (props) => {
  console.log(props);
  return(
    <h1>{props.course.name}</h1>
  )
}
const Content = (props) => {
  return(
    <div>
      {props.course.parts.map((part, index) => <Part key={index} part={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Footer = (props) => {
  return(
    <p>Number of exercises {props.course.parts.reduce((acc, part) => acc + part.exercises, 0)}</p>
  )
}


const Part = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
  )
}
export default App