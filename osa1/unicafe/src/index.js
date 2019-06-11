import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({good, bad, neutral}) => {

    let total = good + bad + neutral;
    let [avg, positive] = [0, 0];
    if (total > 0) {
        avg = ((good - bad) / total).toFixed(2);
        positive = (good * 100 / total).toFixed(1);
    }

    return <>
        <p>{"Good:"} {good}</p>
        <p>{"Neutral:"} {neutral}</p>
        <p>{"Bad:"} {bad}</p>
        <p>{"Total:"} {total}</p>
        <p>{"Average:"} {avg}</p>
        <p>{"Positive:"} {positive} {"%"}</p>
        </>
}

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
            <Display good={good} bad={bad} neutral={neutral}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)