import React, { useEffect, useState } from 'react'
import { PrettyParagraph } from './Todo/styles'

const Weather = () => {
    const [weather, setWeather] = useState(null)
    // not needed
    // const[charNum, setCharNum] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=manhattan&appid=886705b4c1182eb1c69f28eb8c520e20')
            const data = await res.json()
            setWeather(data)
        }
        fetchData()
    }, [])

    return(
        <>
            <div> Today's Weather @ Manhattan</div>  
            <PrettyParagraph>
                Weather Description: {weather ? weather.weather[0].description : "Loading..."}
                <br />
                Temperature: {weather ? weather.main.temp : "Loading..."} K
                <br />
                Humidity: {weather ? weather.main.humidity: "Loading..."} %
                <br /> 
                Wind Speed: {weather ? weather.wind.speed: "Loading..."} mph
            </PrettyParagraph>
            <PrettyParagraph><i>Data from api.openweathermap.org</i></PrettyParagraph>
        </>
    )   
    
}

export default Weather