// import styled from 'styled-components'
import React, { useState, useEffect} from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'
import Weather from '../weather'
import ExampleComponent from '../ExampleComponent'
import { PrettyH2, PrettyH1, StyledContainer } from '../Todo/styles'
import { PrettyContainer, PrettyH3, WeatherContainer } from "./styles"




const Home = () => {

    // current time
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval (() => setDate(new Date(), 1000))
        return function cleanup(){
            clearInterval(timer)
        }
    })
  


    return (
        <ThemeProvider theme={ theme }>
            <PrettyContainer>
            <StyledContainer>
                <PrettyH1> Welcome to you personal assistant!</PrettyH1>
                <PrettyH2> Today's Date is {date.toLocaleDateString()}</PrettyH2>
            
                <PrettyH2> The Current Time is {date.toLocaleTimeString()}</PrettyH2>
                <WeatherContainer>
                    <PrettyH3>
                        <Weather />  
                    </PrettyH3>
                </WeatherContainer>
                <ExampleComponent />  
            </StyledContainer>
            </PrettyContainer>
        </ThemeProvider>
    )
  
}

export default Home
