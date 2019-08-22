import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

const Contacts = ({
    persons, filter, deletePerson,
}) => {
    const showAll = filter === ''

    const contactsToShow = showAll
        ? persons
        : persons.filter((person) => {
            if (person.name.toLowerCase().includes(filter.toLowerCase())) {
                return true
            }
            return false
        })

    const rows = () => contactsToShow.map((person) => (
        <Contact
            key={person.id}
            id={person.id}
            name={person.name}
            number={person.number}
            deletePerson={deletePerson}
        />
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

Contacts.propTypes = {
    persons: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    deletePerson: PropTypes.func.isRequired,
}

export default Contacts
