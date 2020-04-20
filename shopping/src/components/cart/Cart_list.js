import React from 'react'
import Cart_item from './Cart_item'
import {Context_consumer} from '../ContextAPI'

export default function Cart_list() {
    
    
    
    return (
       <Context_consumer>
         
           {
               value=>{
                   return value.cart_products.map(
                       data=>{
                           return <Cart_item key={data.id} item={data} value={value}/>
                       }
                   )
               }
           }
        </Context_consumer>
    )
}


