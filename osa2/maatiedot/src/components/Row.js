import React from 'react'
import Button from './Button'

const Row = ({text, handleShowButton, code}) => {
    return (
        <>
        <tr>
            <td>{text}</td>
            <td><Button text={'show'} handleShowButton={handleShowButton} code={code}/></td>
        </tr>
        </>
    )
}

export default Row