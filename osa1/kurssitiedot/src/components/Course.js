import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = (props) => {
    console.log("Course:", props)

    return (
        <>
            <Header text={props.course.name} />
            <Content parts={props.course.parts} />
        </>
    )
}

export default Course