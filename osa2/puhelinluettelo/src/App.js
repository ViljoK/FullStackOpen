import React, { useState, useRef, useEffect } from 'react'
import personService from './services/persons'
import Contacts from './components/Contacts'
import FormTable from "./components/FormTable"
import InputTable from "./components/InputTable"
import Notification from './components/Notification'
import './index.css'


const App = () => {
    const [ persons, setPersons]        = useState([])
    const [ newName, setNewName ]       = useState('')
    const [ newNumber, setNewNumber ]   = useState('')
    const [ filter, setFilter]          = useState('')
    const [ message, setMessage]        = useState(null)

    useEffect( () => {
        console.log('effect')
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
                console.log(`Haku valmis, löytyi: ${persons.length} yhteystietoa`)
            })
    }, [persons.length])

    const nameRef = useRef('')
    const numberRef = useRef('')

    const addPerson = event => {
        event.preventDefault()
        if (newName === "") {
            nameRef.current.focus()
            return
        }
        else if (newNumber === "") {
            numberRef.current.focus()
            return
        }
        const existingPerson = persons.find(obj => obj.name === newName)
        if (existingPerson !== undefined){
            
            if (window.confirm(`Henkilö ${existingPerson.name} löytyy jo osoitekirjasta. \nHaluatko päivittää numeron?`)) {
                
                personService
                    .update(existingPerson.id, newNumber)
                    .then(response => {
                        setPersons([])
                        setNewName('')
                        setNewNumber('')
                        nameRef.current.focus()
                        setMessage({text: response.message, color: 'lightgreen'})
                        setTimeout(() => {
                            setMessage(null)
                        }, 4000)
                    })
            }
        }else {
            const newPerson = {
                name:   newName,
                number: newNumber
            }
            personService
                .create(newPerson)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                    nameRef.current.focus()
                    setMessage({text: `${returnedPerson.name} added`, color: 'lightgreen'})
                    setTimeout(() => {
                        setMessage(null)
                    }, 4000)
                })
        }
    }

    const deletePerson = event => {
        event.persist()
        const index = persons.findIndex(person => person.id === event.target.id)
        console.log(persons, index, event.target.id)
        if (window.confirm(`Do you really want to delete ${persons[index].name}`)) {
            personService
                .drop(event.target.id)
                .then(response => {
                    setMessage({text: 'Delete successful', color: 'lightgreen'})
                    setTimeout(() => {
                        setMessage(null)
                    }, 4000)
                    console.log(response)
                })
                .catch(error => {
                    setMessage({text: 'Error: Allready deleted', color: 'red'})
                    setTimeout(() => {
                        setMessage(null)
                    }, 4000)
                    console.log(error)
                })
            setPersons([])
        }
    }

    const handleNameChange = event => {
        setNewName(event.target.value)
    }

    const handleNumberChange = event => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = event => {
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
            name:       "Find",
            value:      filter,
            handler:    handleFilterChange,
            id:         1
        }
    ]

    const appStyle = {
        width: '90%',
        margin: '0 auto 0 auto',
        borderRadius: 10
    }
    const h1Style = {
        textAlign: 'center'
    }

    return (
        <div style={appStyle}>
            <h1 style={h1Style}>Phonebook</h1>
            <h2>Add new</h2>
            <FormTable inputs={addStates} onsubmit={addPerson}/>
            <h2>Contacts</h2>
            <InputTable inputs={filterStates} />
            <Contacts persons={persons} filter={filter} deletePerson={deletePerson}/>
            <Notification message = {message} />
        </div>
    )

}
export default App