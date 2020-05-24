
import React, { Component } from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom'
import  Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cartproduct from './components/Cartproduct'
import Page_notfound from './components/Page_notfound'
import DynamikTitle from './components/DynamikTitle'
import './App.css'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Cartitem from './components/cart/Cartitem'


export class App extends Component {

  render() {
   
    return (
      <React.Fragment >
        <Navbar/>
        <DynamikTitle />
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route  path='/Details' component={Details}/>
          <Route path='/Cartproduct' component={Cartproduct}/>
          <Route  component={Page_notfound}/>
          
          </Switch>
          <Modal/>
          <Cartitem/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default App
