import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <>
            <h1>{props.text}</h1>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <Part name={props.parts[0].name} count={props.parts[0].exercises}/>
            <Part name={props.parts[1].name} count={props.parts[1].exercises}/>
            <Part name={props.parts[2].name} count={props.parts[2].exercises}/>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>{props.name} {props.count}</p>
        </>
    )
}

const Total = (props) => {
    let sum = 0;
    for (let part of props.parts) {
        console.log(part);
        sum += part.exercises;
    }

    return (
        <>
            <p>Number of exercises {sum}</p>
        </>
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
            }
        ]
    }

    return (
        <div>
            <Header text={course.name} />
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
