import React, { Component } from 'react'
import  {Context_consumer} from './ContextAPI'
import Detail_in_one from './Detail_in_one'

 class Details extends Component {
    render() {
        
        return (
            <Context_consumer>
                {(value)=>{
                    return <Detail_in_one detail_item={value.detailProduct}/>
                }}
            </Context_consumer>
        )
    }
}

export default Details
