import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Phonebook from './components/Phonebook'
import './index.css'

const App = () => {
    const url = 'http://localhost:3001/'
    const [ persons, setPersons] =      useState([])
    const [ newName, setNewName ] =     useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filter, setFilter] =        useState('')

    useEffect( () => {
        console.log('effect')
        axios
            .get(url + 'persons')
            .then(response => {
                console.log('haku valmis')
                setPersons(response.data)
            })
    }, [])
    console.log('Tarkistus: ', persons.length)

    const nameRef = useRef('')
    const numberRef = useRef('')

    const addPerson = (event) => {
        event.preventDefault()
        if (newName === "") {
            nameRef.current.focus()
            return
        }
        else if (newNumber === "") {
            numberRef.current.focus()
            return
        }
        if (persons.find(obj => obj.name === newName) !== undefined){
            alert(`${newName} on jo olemassa`)
            console.log(nameRef.current)
        }else {
            let newPerson = {
                name:   newName,
                number: newNumber,
                id:     persons.length + 1
            }
            setPersons(persons.concat(newPerson))
            setNewName('')
            setNewNumber('')
            nameRef.current.focus()
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

    const addStates = [
        {
            name:       "Name",
            value:      newName,
            handler:    handleNameChange,
            id:         1,
            ref:        nameRef,
        },
        {
            name:       "Number",
            value:      newNumber,
            handler:    handleNumberChange,
            id:         2,
            ref:        numberRef,
        },
    ]

    const filterStates = [
        {
            name:       "Filter",
            value:      filter,
            handler:    handleFilterChange,
            id:         1
        }
    ]

    return (
        <>
            <Phonebook
                onsubmit=       {addPerson}
                addStates=      {addStates}
                filterStates=   {filterStates}
                filter=         {filter}
                persons=        {persons}
            />
        </>
    )

}
export default App