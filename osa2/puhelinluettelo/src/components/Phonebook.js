import React from 'react'
import Contacts from './Contacts'
import FormTable from "./FormTable";

const Phonebook = (props) => {
    return (
        <>
            <h1>Phonebook</h1>
            <div> Filter:
                <input
                    value={props.filter}
                    onChange={props.handleFilterChange}
                />
            </div>
            <h2>Add new</h2>
            <FormTable inputs={props.formInputStates}/>
            <h2>Contacts</h2>
            <Contacts persons={props.persons} filter={props.filter} />
        </>
    )
}

export default Phonebook