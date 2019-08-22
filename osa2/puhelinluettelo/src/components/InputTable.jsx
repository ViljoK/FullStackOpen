import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

const InputTable = ({ inputs }) => {
    const rows = () => inputs.map((input) => (
        <tr key={input.id}>
            <td>{input.name}</td>
            <td>
                <Input handler={input.handler} value={input.value} />
            </td>
        </tr>
    ))
    return (
        <>
            <table>
                <tbody>
                    {rows()}
                </tbody>
            </table>
        </>
    )
}

InputTable.propTypes = {
    inputs: PropTypes.array.isRequired,
}

export default InputTable
