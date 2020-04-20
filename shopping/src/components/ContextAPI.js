import React, { Component } from 'react'
import {detailProduct,product_inStore} from '../../src/data'


const ContextProvider=React.createContext()
 class Infoprovider extends Component {
  
       state = {
        product_inStore: [],
        detailProduct:detailProduct,
        product_provised_cart: [],
        modalOpen:false,
        modal_product:detailProduct,
        cart_products:[],
        cart_Subtotal:0,
        cart_tax:0,
        cart_total:0

       }
      
setProducts=()=>{
    let setproducts=[]
    product_inStore.forEach(
        item=>{
            const pro={...item}
            setproducts=[...setproducts,pro]
        }

    )
    this.setState(
        ()=>{return {product_inStore:setproducts}}
    )
}
//  WE NEED TO EMPROVISING HOW WE CA -N ACCESSING AND EXPLORING DATA WITHOUT CHANGE
// THE ORIGINAL ONES WITH THIS METHODE CYCLE componentDidMount()
componentDidMount(){
    this.setProducts()
}
getSpecifiedItem=id=>this.state.product_inStore.find(item=>item.id===id)
   handleDetail=(id)=>{
       const itemFound=this.getSpecifiedItem(id)
       this.setState({
        detailProduct:itemFound
     })
       
   }
//    HERE INSTEAD USING id I PREFARE TO USE INDEX BECAUSE ID CAN MODIFY THE ORIGINAL POSITION
// OF THE PRODUCT IN PRODUCTLIST
   addTocart=(id)=>{
          let pro_temporary_Array=[...this.state.product_inStore]
          const prodIndex=pro_temporary_Array.indexOf(this.getSpecifiedItem(id))
          const _new_prod_=pro_temporary_Array[prodIndex]
        //   here am gonna jst update the values of the new  product added to the cart
        _new_prod_.inCart=true
        _new_prod_.count=1
        _new_prod_.total=_new_prod_.price
        this.setState(
            ()=>{
                return{product_inStore:pro_temporary_Array,product_provised_cart:[...this.state.product_provised_cart,_new_prod_]
                }},
                console.log(this.state)
        )
   }
// ABOUT CREATING DYNIMIC MODAL COMPONENT
    openModal=id =>{
        const prod=this.getSpecifiedItem(id)
        this.setState(
            ()=>{
                return {modal_product:prod,modalOpen:true}
            }
        )
    }
    closeModal=()=>{
        this.setState(()=>{
            return {modalOpen:false}
        })
    }
    // WE SET METHODES WHICH ONE MANUPILATE THE CART
    increment=id=>{
        console.log('incrementation')
    }
    decrement=(id)=>{
        console.log('decrementation')
    }
    clearproducts=()=>{
        console.log('clear all products')
    }
        render() {


        return (
            <ContextProvider.Provider value={
            {
            ...this.state,
            handleDetail:this.handleDetail,
            addTocart:this.addTocart,
            openModal:this.openModal,
            closeModal:this.closeModal,
            increment:this.increment,
            decrement:this.decrement,
            clearproducts:this.clearproducts

            }

            }>
            {this.props.children}                
            </ContextProvider.Provider>
        )
    }
}
const Context_consumer=ContextProvider.Consumer
export {Context_consumer,Infoprovider}
