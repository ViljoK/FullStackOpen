import React from 'react'
import Row from './Row'

const Table = ({countries}) => {
    const rows = countries.map((country, i) => <Row text={country.name} key={i}/>) 
    return <table><tbody>{rows}</tbody></table>
}

export default Table