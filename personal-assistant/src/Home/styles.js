import styled from "styled-components"


export const PrettyContainer = styled.div`
    width: 100vw;
    display: flex;
    padding: 10vh 0;
    justify-content: center;
    align-items: center;
    background: ${ ({theme}) => theme.color.beige };
`

export const PrettyH3 = styled.h3`
    font-family: ${ ({theme}) => theme.font.h3.family };
    font-size: 18px;
    text-align: center;
    color: ${ ({theme}) => theme.color.blue };
    
`

export const WeatherContainer = styled.div`
    background: ${ ({theme}) => theme.color.lightyellow };
    padding: 2vh;
    border-radius: 5px;
`

