import React from "react"
import { Container, NavLink } from "./styles"

const Navbar = () => (
    <Container>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/todo'>Todo</NavLink>
    </Container>
)

export default Navbar