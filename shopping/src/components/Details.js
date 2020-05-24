import React, { Component } from 'react'
import  {Contextconsumer} from './ContextAPI'
import Singledetail from './Singledetail'

 class Details extends Component {
    render() {
        
        return (
            <Contextconsumer>
                {(value)=>{
                    return <Singledetail detail_item={value.detailProduct}/>
                }}
            </Contextconsumer>
        )
    }
}

export default Details
