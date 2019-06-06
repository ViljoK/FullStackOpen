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
            <Part name={props.name} count={props.exercises}/>
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
    for (let prop in props) {
        sum += props[prop];
    }
    return (
        <>
            <p>Number of exercises {sum}</p>
        </>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const parts = [
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

    return (
        <div>
            <Header text={course} />
            <Content name={parts[0].name} exercises={parts[0].exercises}/>
            <Content name={parts[1].name} exercises={parts[1].exercises}/>
            <Content name={parts[2].name} exercises={parts[2].exercises}/>
            <Total exs1={parts[0].exercises} exs2={parts[1].exercises} exs3={parts[2].exercises}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
