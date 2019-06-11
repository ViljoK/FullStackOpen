import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = (props) => {
    console.log("Course:", props)

    return (
        <>
            <Header text={props.course.name} />
            <Content parts={props.course.parts} />
            <Total parts={props.course.parts}/>
        </>
    )
}

export default Course