import React from 'react'
import Cartitem from './Cartitem'
import {Contextconsumer} from '../ContextAPI'

export default function Cartlist() {
    
    
    
    return (
       <Contextconsumer>
         
           {
               value=>{
                   return value.Cartproducts.map(
                       data=>{
                        console.log('props from cartlist',data)
                           return <Cartitem key={data.id} item={data} value={value}/>
                       }
                   )
                  
               }
            
               
           }
        </Contextconsumer>
    )
}


