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
        width: 300,
        backgroundColor: 'lightgreen'
    }
    const msgStyle = {
        width: '95%',
        margin: '0 auto 0 auto',
        color: 'darkgreen',
        textAlign: 'center'
    }

    return (
        <>
            <div style={divStyle}>
                <p style={msgStyle}>{message}</p>
            </div>
        </>
    )
}

export default Notification