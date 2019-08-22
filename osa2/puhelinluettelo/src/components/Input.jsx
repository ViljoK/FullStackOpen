import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ handler, value, reff }) => <input type="text" ref={reff} value={value} onChange={handler} />

Input.propTypes = {
    handler: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    reff: PropTypes.object,
}

Input.defaultProps = {
    reff: null,
}

export default Input
