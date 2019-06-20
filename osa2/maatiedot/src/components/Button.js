import React from 'react'

const Button = ({text, handleShowButton, code}) => {
    return <><button onClick={handleShowButton(code)}>{text}</button></>
}

export default Button