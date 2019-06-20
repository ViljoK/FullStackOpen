import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Input from './components/Input'
import Results from './components/Results'
import './index.css'

const App = () => {
    const url = 'https://restcountries.eu/rest/v2/'

    const [countries, setCountries] = useState([])
    const [filter, setFilter]       = useState('')
    const [results, setResults]     = useState([])

    const handleFilterChange = (event) => {
        let filter = event.target.value
        setFilter(filter)
        let newResults = countries.filter(country => {
            const filterPieces = filter.split(' ')
            for (let piece of filterPieces) {
                if (!country.name.toUpperCase().includes(piece.toUpperCase())) {
                    return false
                }
            }
            return true
        })
        setResults(newResults)
    }

    useEffect(() => {
        console.log('axios')
        axios
        .get(url + 'all')
        .then(response => {
            setCountries(response.data)
        })
    }, [])

    console.log('Alku')

    return (
        <> 
            <p>Search countries:</p>
            <Input handler={handleFilterChange} value={filter} />
            <Results countries={results} filter={filter} />
        </>
    )
}

export default App