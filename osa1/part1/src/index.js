import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Hello = ({name, age}) => {
    const bornYear = () => new Date().getFullYear() - age

    return (
        <>
            <p>Hello {name}, you are {age} years old</p>
            <p>So you were probably born {bornYear()}</p>
        </>
    )
}

const Display = ({ counter }) => <p>{counter}</p>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = (props) => {
    const nimi = 'Seppo'
    const ika = 10

    const [ counter, setCounter] = useState(0)

    const setToValue = (value) => setCounter(value)

    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Arto Hellas" age={26 + 10} />
            <Hello name={nimi} age={ika} />
            <Display counter={counter} />
            <Button
                handleClick={() => setToValue(counter + 1)}
                text='plus'
            />
            <Button
                handleClick={() => setToValue(counter - 1)}
                text='minus'
            />
            <Button
                handleClick={() => setToValue(0)}
                text='zero'
            />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)