import React from 'react'
import Contact from './Contact'

const Contacts = ({persons, filter}) => {
    console.log(filter)
    let showAll = filter === ''

    const contactsToShow = showAll
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    const rows = () => contactsToShow.map(person =>
        <Contact
            key={person.id}
            name={person.name}
            number={person.number}
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