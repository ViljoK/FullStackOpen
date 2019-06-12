import React from 'react'
import Contacts from './Contacts'
import FormTable from "./FormTable";
import InputTable from "./InputTable";

const Phonebook = (props) =>
    <>
        <h1>Phonebook</h1>
        <InputTable inputs={props.filterStates} />
        <h2>Add new</h2>
        <FormTable inputs={props.addStates} onsubmit={props.onsubmit}/>
        <h2>Contacts</h2>
        <Contacts persons={props.persons} filter={props.filter} />
    </>

export default Phonebook