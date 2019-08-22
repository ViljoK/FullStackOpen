import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    const divStyle = {
        margin: '20px 0 0 20px',
        padding: 10,
        border: '1px solid black',
        borderRadius: 10,
        width: '80%',
        backgroundColor: message.color,
    }
    const msgStyle = {
        width: '95%',
        margin: '0 auto 0 auto',
        textAlign: 'center',
    }

    return (
        <>
            <div style={divStyle}>
                <p style={msgStyle}>{message.text}</p>
            </div>
        </>
    )
}

Notification.propTypes = {
    message: PropTypes.object,
}

Notification.defaultProps = {
    message: null,
}

export default Notification
