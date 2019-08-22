import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({
    name, number, deletePerson, id,
}) => (
    <tr>
        <td className="name">{name}</td>
        <td className="phone">{number}</td>
        <td>
            <button type="button" id={id} onClick={deletePerson}>Delete</button>
        </td>
    </tr>
)

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deletePerson: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}

export default Contact
