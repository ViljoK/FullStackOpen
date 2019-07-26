import React from 'react'
import Contact from './Contact'

const Contacts = ({persons, filter, deletePerson}) => {
    let showAll = filter === ''

    const contactsToShow = showAll
        ? persons
        : persons.filter(person => {
            const filterPieces = filter.split(" ")
            for (let piece of filterPieces) {
                if (!person.name.toLowerCase().includes(piece.toLowerCase()) && !person.number.includes(piece)) {
                    return false
                }
            }
            return true
        })

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