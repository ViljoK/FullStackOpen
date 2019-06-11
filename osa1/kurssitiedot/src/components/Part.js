import React from 'react'

const Part = (props) => {
    console.log("Part: ", props)
    return (
        <>
            <p>{props.name} {props.exercises}</p>
        </>
    )
}

export default Part