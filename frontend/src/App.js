import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Container}from'react-bootstrap'
import Header from'./components/Header'
import Footer from'./components/Footer'
import HomeScreen from './sceens/HomeScreen'
import ProductScreen from './sceens/ProductScreen'
import CartScreen from './sceens/CartScreen'
import LoginScreen from './sceens/LoginScreen'

const App = () => {
  return (
  <Router>
  <Header/>
    <main className='py-3'>
      <Container>
        <Route path='/login' component={LoginScreen}/>
        <Route path='/product/:id' component={ProductScreen}/>
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/' component={HomeScreen} exact/>
      </Container>
    </main>
    <Footer/>
  </Router>
  )
}

export default App
