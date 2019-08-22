import React from 'react'

const Notification = ({message}) => {
    if (message === null) {
        return null
    }
    const divStyle = {
        margin: '20px 0 0 20px',
        padding: 10,
        border: '1px solid black',
        borderRadius: 10,
        width: '80%',
        backgroundColor: message.color
    }
    const msgStyle = {
        width: '95%',
        margin: '0 auto 0 auto',
        textAlign: 'center'
    }

    return (
        <>
            <div style={divStyle}>
                <p style={msgStyle}>{message.text}</p>
            </div>
        </>
    )
}

export default Notification