import React from 'react'

const Contact = (props) => {
    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{props.number}</td>
            </tr>
        </>
    )
}

export default Contact