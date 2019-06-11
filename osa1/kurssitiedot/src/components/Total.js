import React from 'react'

const Total = (props) => {
    console.log("Total: ", props)
    let sum = props.parts.reduce( (s, p) => {
        if (s.exercises) {
            return s.exercises + p.exercises
        } else {
            return s + p.exercises
        }
    })
    return (
        <>
            <h3>{"Total of " + sum + " exercises"}</h3>
        </>
    )
}

export default Total