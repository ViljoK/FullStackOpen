import React from 'react'

const Contact = ({name, number, deletePerson, id}) =>
    <tr>
        <td>{name}</td>
        <td>{number}</td>
        <td>
            <button id={id} onClick={deletePerson}>Delete</button>
        </td>
    </tr>

export default Contact