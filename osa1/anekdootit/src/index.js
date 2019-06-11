import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = props => <button className={"Button"} onClick={props.handleClick}>{props.text}</button>

const Display = props => <p>{props.text}</p>

const Caption = props => <h1>{props.text}</h1>

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0})
    const [max, setMax] = useState({"index": 0, "votes": 0})

    console.log(selected, votes, max)
    return (
        <>
            <Caption text={"Anecdote of the day"}/>
            <Display text={props.anecdotes[selected]}/>
            <Display text={"Has " + votes[selected] + " votes"}/>
            <Button handleClick={() => changeAnecdote(setSelected)} text={"Next anecdote"}/>
            <Button handleClick={() => makeVote(selected, votes, setVotes, max, setMax)} text={"Vote"}/>
            <Caption text={"Anekdote with most votes"}/>
            <Display text={props.anecdotes[max.index]}/>
            <Display text={"Has " + max.votes + " votes"}/>
        </>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)

//Functions
const changeAnecdote = (setSelected) => {
    let rnd = Math.floor(Math.random() * 6)
    setSelected(rnd)
}

const makeVote = (selected, votes, setVotes, max, setMax) => {
    let newVotes = {...votes}
    newVotes[selected] += 1
    setVotes(newVotes)

    for (let i in newVotes) {
        if (newVotes[i] > max.votes) {
            let newMax = {...max}
            newMax.index = i
            newMax.votes = newVotes[i]
            setMax(newMax)
        }
    }
}
