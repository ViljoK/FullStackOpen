import React from 'react'
import Table from './Table'
import Country from './Country'

const Results = ({countries, filter}) => {
    console.log('Res: ', filter.length)
    if (countries.length === 0 && filter.length === 0) {
        return <><p>Start typing to search</p></>
    }
    else if (countries.length === 0 && filter.length > 0) {
        return <><p>No mathes</p></>
    }
    else if (countries.length > 20) {
        return <><p>Too many matches</p></>
    }
    else if (countries.length === 1) {
        return <><Country country={countries[0]} /></>
    }
    else {
        return <><Table countries={countries} /></>
    }
}

export default Results