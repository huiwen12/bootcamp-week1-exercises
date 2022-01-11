import styled from "styled-components"
import { NavLink as Link } from "react-router-dom"

export const Container = styled.div`
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${ ({theme}) => theme.color.blue };
`

export const NavLink = styled(Link).attrs()`
    font-family: ${ ({theme}) => theme.font.header.family };
    font-size: 18px;
    font-weight: ${ ({theme}) => theme.font.header.weight};
    color: ${ ({theme}) => theme.color.beige };
    margin: 0 20px;
    text-decoration: none;


`