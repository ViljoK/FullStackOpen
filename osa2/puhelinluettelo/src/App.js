import React, { useState } from 'react'
import Contacts from './components/Contacts'
import './index.css'

const App = () => {
    const [ persons, setPersons] = useState([
        { name: 'Arto Hellas', id: 1}
    ])
    const [ newName, setNewName ] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        console.log(newName)
        let newPerson = {
            name: newName,
            id: persons.length + 1
        }
        setPersons(persons.concat(newPerson))
        setNewName('')
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <Contacts persons={persons} />
        </div>
    )

}
export default App