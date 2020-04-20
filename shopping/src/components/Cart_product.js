import React, { Component } from 'react'
import {Context_consumer} from './ContextAPI'
import {Link} from 'react-router-dom'
import DynamikTitle from './DynamikTitle'
import Cartcolumns from './Cartcolumns'
import Emptycart from '../components/cart/Emptycart'
import Cart_list from './cart/Cart_list'

export class Cart_product extends Component {
    render() {
        
        return (
            <section>

                  <Context_consumer>
                      {
                          (value)=>{
                            const{cart_products}=value;
                            if(cart_products.length>0)
                               return ( 
                               <React.Fragment>
                               <DynamikTitle name='your' title='cart'/>
                               <Cartcolumns/>
                               <Cart_list/>
                               </React.Fragment>
                               )
                            else 
                               return(
                                <Emptycart/>
                               )
                               
                          }
                      }
                  </Context_consumer>
                  
            </section>

               
        )
    }
}

export default Cart_product
