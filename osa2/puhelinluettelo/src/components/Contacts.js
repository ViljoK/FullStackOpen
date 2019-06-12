import React from 'react'
import Contact from './Contact'

const Contacts = (props) => {

    const rows = () => props.persons.map(person =>
        <Contact
            key={person.id}
            name={person.name}
        />
    )
    return (
        <>
            <ul>
                {rows()}
            </ul>
        </>
    )
}

export default Contacts