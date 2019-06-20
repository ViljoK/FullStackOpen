import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Input from './components/Input'
import Results from './components/Results'
import './index.css'

const App = () => {
    const url = 'https://restcountries.eu/rest/v2/'

    const [countries, setCountries]     = useState([])
    const [filter, setFilter]           = useState('')
    const [results, setResults]         = useState([])

    const handleFilterChange = (event) => {
        let newFilter = event.target.value
        setFilter(newFilter)
        let newResults = countries.filter(country => {
            const filterPieces = newFilter.split(' ')
            for (let piece of filterPieces) {
                if (!country.name.toUpperCase().includes(piece.toUpperCase())) {
                    return false
                }
            }
            return true
        })
        setResults(newResults)
    }

    const handleShowButton = (code) => () => {
        console.log('ShowButton', code)
        setFilter(code)
        let result = countries.filter((country) => country.alpha3Code === code)
        setResults(result)
        console.log(result)
    }

    useEffect(() => {
        axios
        .get(url + 'all')
        .then(response => {
            console.log('Haku valmis:', response.data.length, 'maata löytyi')
            setCountries(response.data)
        })
    }, [])

    return (
        <> 
            <p>Search countries:</p>
            <Input handler={handleFilterChange} value={filter} />
            <Results countries={results} filter={filter} handleShowButton={handleShowButton}/>
        </>
    )
}

export default App