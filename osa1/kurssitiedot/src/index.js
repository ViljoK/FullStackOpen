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
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    return (
        <div>
            <Header text={course} />
            <Content name={part1.name} exercises={part1.exercises}/>
            <Content name={part2.name} exercises={part2.exercises}/>
            <Content name={part3.name} exercises={part3.exercises}/>
            <Total exs1={part1.exercises} exs2={part2.exercises} exs3={part3.exercises}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
