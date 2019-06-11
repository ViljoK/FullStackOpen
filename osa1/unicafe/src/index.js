import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Caption = props => <><h1>{props.text}</h1></>

const Statistics = ({good, bad, neutral}) => {

    let total = good + bad + neutral;
    let [avg, positive] = [0, 0];
    if (total > 0) {
        avg = ((good - bad) / total).toFixed(2);
        positive = (good * 100 / total).toFixed(1);
    }

    if (total === 0) {
        return <>
            <Table contents={<Display text={"No feedback given"}/>}/>
        </>
    }
    else {
        return <>
            <Table contents={[
                <Display key={0} text={"Good:"} value={good}/>,
                <Display key={1} text={"Neutral:"} value={neutral}/>,
                <Display key={2} text={"Bad:"} value={bad}/>,
                <Display key={3} text={"Total:"} value={total}/>,
                <Display key={4} text={"Average:"} value={avg}/>,
                <Display key={5} text={"Positive:"} value={positive} unit={"%"}/>,
            ]}/>
        </>
    }
}

const Table = props => <table><tbody>{props.contents}</tbody></table>

const Display = props => <tr><td>{props.text}</td><td>{props.value}{props.unit}</td></tr>

const Button = props => <button className={"Button"} onClick={props.handleClick}>{props.text}</button>

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <>
            <Caption text="Give feedback" />
            <Button handleClick={() => setGood(good + 1)} text={"Good"} />
            <Button handleClick={() => setNeutral(neutral + 1)} text={"Neutral"} />
            <Button handleClick={() => setBad(bad + 1)} text={"Bad"} />
            <Caption text="Statistics"/>
            <Statistics good={good} bad={bad} neutral={neutral}/>
        </>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)