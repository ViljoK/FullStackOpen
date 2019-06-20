import React from 'react'
import Row from './Row'

const Table = ({countries, handleShowButton}) => {
    const rows = countries.map((country, i) => <Row text={country.name} key={i} handleShowButton={handleShowButton} code={country.alpha3Code}/>) 
    return <table><tbody>{rows}</tbody></table>
}

export default Table