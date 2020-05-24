import React, { Component } from 'react'
import Products from '../components/Products'
import DynamikTitle from './DynamikTitle' 
import {product_inStore,detailProduct} from '../../src/data'
import {Contextconsumer} from './ContextAPI'


 class ProductList extends Component {
    
     state={
        products:product_inStore,
        name:'our',
        title:'products'
     }
    render() {
       
        return (
           <div className='container'>
              
           <DynamikTitle name={this.state.name} title={this.state.title}/>
               <div className='row my-3'>
                     
                  <Contextconsumer>
                     
                     {
                     (value)=>{
                        return value.product_inStore.map(
                           data=> {
                              return <Products key={data.id} item={data} />
                           }
                           )
                     }
                  }
                           
                     
                     </Contextconsumer>
               </div>

           </div>
        )
    }
}

export default ProductList
