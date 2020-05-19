import React, { Component } from 'react'
import {Contextconsumer} from './ContextAPI'
import DynamikTitle from './DynamikTitle'
import Cartcolumns from './Cartcolumns'
import Emptycart from './cart/Emptycart'
import Cartlist from './cart/Cartlist'

export class Cartproduct extends Component {
    render() {
        
        return (
            <section>

                  <Contextconsumer>
                      {
                          (value)=>{
                            const{Cartproducts}=value;
                            if(Cartproducts.length>0)
                               return ( 
                               <React.Fragment>
                               <DynamikTitle name='your' title='cart'/>
                               <Cartcolumns/>
                               <Cartlist/>
                               </React.Fragment>
                               )
                            else 
                               return(
                                <Emptycart/>
                               )
                               
                          }
                      }
                  </Contextconsumer>
                  
            </section>

               
        )
    }
}

export default Cartproduct
