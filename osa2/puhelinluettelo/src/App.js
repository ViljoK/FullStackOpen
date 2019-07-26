import React, { useState, useRef, useEffect } from 'react'
import Phonebook from './components/Phonebook'
import personService from './services/persons'
import './index.css'

const App = () => {
    const [ persons, setPersons] =      useState([])
    const [ newName, setNewName ] =     useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filter, setFilter] =        useState('')

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
                const updatePerson = {
                    name:   existingPerson.name,
                    number: newNumber,
                    id: existingPerson.id
                }
                personService
                    .update(updatePerson)
                    .then(returnedPerson => {
                        setPersons([])
                        setNewName('')
                        setNewNumber('')
                        nameRef.current.focus()
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
                })
        }
    }

    const deletePerson = event => {
        event.persist()
        const index = persons.findIndex(person => person.id === parseInt(event.target.id))
        console.log(persons, index, event.target.id)
        if (window.confirm(`Haluatko varmasti poistaa ${persons[index].name}`)) {
            personService
                .drop(event.target.id)
                .then(response => {
                    console.log(response)
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
                deletePerson=   {deletePerson}
            />
        </>
    )

}
export default App