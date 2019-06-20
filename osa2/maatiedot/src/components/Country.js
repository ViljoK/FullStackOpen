import React from 'react'
import List from './List'

const Country = ({country}) => {
    console.log('Country: ', country)
    return (
        <>
        <h1>{country.name}</h1>
        <table>
            <tbody>
                <tr>
                    <td><b>Capital</b></td>
                    <td>{country.capital}</td>
                </tr>
                <tr>
                    <td><b>Population</b></td>
                    <td>{country.population}</td>
                </tr>
            </tbody>
        </table>
        <h3>Languages</h3>
        <List items={country.languages} ordered={false} />
        <img src={country.flag} alt={country.name} width={150} height={100} />
        </>
    )
}

export default Country