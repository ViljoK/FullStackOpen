import React from 'react'
import Input from './Input'

const FormTable = ({inputs}) => {
    console.log(inputs)

    const rows = () => inputs.map(input =>
        <tr key={input.id}>
            <td>{input.name}</td>
            <td>
                <Input handler={input.handler} value={input.value} />
            </td>
        </tr>
    )
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

export default FormTable