import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Container}from'react-bootstrap'
import Header from'./components/Header'
import Footer from'./components/Footer'
import HomeScreen from './sceens/HomeScreen'
import ProductScreen from './sceens/ProductScreen'
import CartScreen from './sceens/CartScreen'
import LoginScreen from './sceens/LoginScreen'
import RegisterScreen from './sceens/RegisterScreen'
import ProfileScreen from './sceens/ProfileScreen'
import ShippingScreen from './sceens/ShippingScreen'
import PaymentScreen from './sceens/PaymentScreen'
import PlaceOrderScreen from './sceens/PlaceOrderScreen'
import OrderScreen from './sceens/OrderScreen'

const App = () => {
  return (
  <Router>
  <Header/>
    <main className='py-3'>
      <Container>
        <Route path='/shipping' component={ShippingScreen}/>
        <Route path='/order/:id' component={OrderScreen}/>
        <Route path='/placeorder' component={PlaceOrderScreen}/>
        <Route path='/payment' component={PaymentScreen}/>
        <Route path='/login' component={LoginScreen}/>
        <Route path='/register' component={RegisterScreen}/>
        <Route path='/profile' component={ProfileScreen}/>
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
