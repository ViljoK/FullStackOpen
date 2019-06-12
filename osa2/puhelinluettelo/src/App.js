import React, { useState } from 'react'

import Phonebook from './components/Phonebook'
import './index.css'

const App = () => {
    const [ persons, setPersons] =      useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [ newName, setNewName ] =     useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filter, setFilter] =        useState('')

    const addPerson = (event) => {
        event.preventDefault()
        console.log(newName)
        if (persons.find(obj => obj.name === newName) !== undefined){
            alert(`${newName} on jo olemassa`)
        }else {
            let newPerson = {
                name: newName,
                number: newNumber,
                id: persons.length + 1
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
            
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <>
            <Phonebook
                onsubmit={addPerson}
                newName={newName}
                newNumber={newNumber}
                filter={filter}
                handleNameChange={handleNameChange}
                handleNumberChange={handleNumberChange}
                handleFilterChange={handleFilterChange}
                persons={persons}
            />
        </>
    )

}
export default App