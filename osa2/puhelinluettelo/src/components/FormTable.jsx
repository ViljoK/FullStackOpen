import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

const FormTable = ({ inputs, onsubmit }) => {
    const rows = () => inputs.map((input) => (
        <tr key={input.id}>
            <td>{input.name}</td>
            <td>
                <Input reff={input.ref} handler={input.handler} value={input.value} />
            </td>
        </tr>
    ))
    return (
        <>
            <form onSubmit={onsubmit}>
                <table>
                    <tbody>
                        {rows()}
                    </tbody>
                </table>
                <button type="submit">Add</button>
            </form>
        </>
    )
}

FormTable.propTypes = {
    inputs: PropTypes.array.isRequired,
    onsubmit: PropTypes.func.isRequired,
}

export default FormTable
