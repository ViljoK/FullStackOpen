import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <><p>{props.text} {props.value}</p></>

const Caption = props => <><h1>{props.text}</h1></>

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Caption text="Give feedback" />
            <Button handleClick={() => setGood(good + 1)} text={"Good"} />
            <Button handleClick={() => setNeutral(neutral + 1)} text={"Neutral"} />
            <Button handleClick={() => setBad(bad + 1)} text={"Bad"} />
            <Caption text="Statistics"/>
            <Display text={"Good:"} value={good}/>
            <Display text={"Neutral:"} value={neutral}/>
            <Display text={"Bad:"} value={bad}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)