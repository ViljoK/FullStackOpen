import React, {useState, useEffect} from 'react'
import axios from 'axios'
import List from './List'

const Country = ({country}) => {
    console.log('Country: ', country)
    const url = 'http://api.apixu.com/v1/current.json?key=bab5fb29f3ed442ebef102431192006&q='
    const [weather, setWeather] = useState({})

    useEffect(() => {
        const city = country.capital
            ? country.capital
            : '*'
        axios
        .get(url + city + ' ' + country.name)
        .then(response => {
            console.log(response.data.location)
            setWeather(response.data.current)
        })
        .catch((...e) => {
            console.log(e[0].response.data.error)
        })
    }, [country.name, country.capital])

    console.log('WET', weather)
    const c = weather.condition
    const img = c
        ? <img src={c.icon} alt={c.text}/>
        : <img alt={'empty'}/>
    
    const t = weather.temp_c
    const temp = t !== undefined
        ? 'Temp: ' + t + ' \xB0C'
        : 'Not set'

    const w = weather.wind_kph
    const wind = w !== undefined
        ? 'Wind: ' + w + ' km/h'
        : 'Not set'

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
        <h3>Weather in {country.capital}</h3>
        <table>
            <tbody>
                <tr>
                   <td rowSpan={2}>{img}</td>
                   <td>{temp}</td> 
                </tr>
                <tr>
                    <td>{wind}</td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Country