
import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom'
import  Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart_product from './components/Cart_product'
import Page_notfound from './components/Page_notfound'
import DynamikTitle from './components/DynamikTitle'
import './App.css'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Cart_item from './components/cart/Cart_item'


export class App extends Component {

  render() {
   
    return (
      <React.Fragment >
        <Navbar/>
        <DynamikTitle />
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route  path='/Details' component={Details}/>
          <Route path='/cart_product' component={Cart_product}/>
          <Route  component={Page_notfound}/>
          
          </Switch>
          <Modal/>
          <Cart_item/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App
