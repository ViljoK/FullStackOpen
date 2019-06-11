import React from 'react'

const Total = (props) => {
    console.log("Total: ", props)
    let sum = 0;

    for (let part of props.parts){
        console.log(part)
        sum += part.exercises
    }
    return (
        <>
            <h3>{"Total of " + sum + " exercises"}</h3>
        </>
    )
}

export default Total