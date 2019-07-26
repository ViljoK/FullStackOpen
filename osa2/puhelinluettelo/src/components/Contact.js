import React from 'react'

const Contact = ({name, number, deletePerson, id}) =>
    <tr>
        <td className='name'>{name}</td>
        <td className='phone'>{number}</td>
        <td>
            <button id={id} onClick={deletePerson}>Delete</button>
        </td>
    </tr>

export default Contact