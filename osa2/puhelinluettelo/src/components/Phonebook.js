import React from 'react'
import Contacts from './Contacts'

const Phonebook = (props) => {
    return (
        <>
            <h1>Phonebook</h1>
            <div> Filter:
                <input
                    value={props.filter}
                    onChange={props.handleFilterChange}
                />
            </div>
            <h2>Add new</h2>
            <form onSubmit={props.onsubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            name:
                        </td>
                        <td>
                            <input
                                value={props.newName}
                                onChange={props.handleNameChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            number:
                        </td>
                        <td>
                            <input
                                value={props.newNumber}
                                onChange={props.handleNumberChange}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Contacts</h2>
            <Contacts persons={props.persons} filter={props.filter} />
        </>
    )
}

export default Phonebook