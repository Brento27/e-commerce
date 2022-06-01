import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./sceens/HomeScreen"
import ProductScreen from "./sceens/ProductScreen"
import CartScreen from "./sceens/CartScreen"
import LoginScreen from "./sceens/LoginScreen"
import RegisterScreen from "./sceens/RegisterScreen"
import ProfileScreen from "./sceens/ProfileScreen"
import ShippingScreen from "./sceens/ShippingScreen"
import PaymentScreen from "./sceens/PaymentScreen"
import PlaceOrderScreen from "./sceens/PlaceOrderScreen"
import OrderScreen from "./sceens/OrderScreen"
import UserListScreen from "./sceens/UserListScreen"
import UserEditScreen from "./sceens/UserEditScreen"
import ProductListScreen from "./sceens/ProductListScreen"
import ProductEditScreen from "./sceens/ProductEditScreen"
import OrderListScreen from "./sceens/OrderListScreen"

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/shipping" component={ShippingScreen} />
          <Route path="/admin/userlist" component={UserListScreen} />
          <Route path="/admin/orderlist" component={OrderListScreen} />
          <Route path="/admin/productlist" component={ProductListScreen} />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
