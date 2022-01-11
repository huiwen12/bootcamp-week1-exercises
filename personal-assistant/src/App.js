// import styled from 'styled-components'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Footer from './Footer/index'
import Todo from './Todopage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Navbar from './NavBar'


const App = () => ( 
  < ThemeProvider theme={ theme }>
    <div>
      <BrowserRouter basename="personal-assistant">
        <Navbar />
        <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>  
    
      
  
  </ThemeProvider>

)

export default App
