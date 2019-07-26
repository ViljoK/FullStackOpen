import React from 'react'
import Contact from './Contact'

const Contacts = ({persons, filter, deletePerson}) => {
    let showAll = filter === ''

    const contactsToShow = showAll
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    const rows = () => contactsToShow.map(person =>
        <Contact
            key             = {person.id}
            id              = {person.id}
            name            = {person.name}
            number          = {person.number}
            deletePerson    = {deletePerson} 
        />
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

export default Contacts