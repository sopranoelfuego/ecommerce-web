import React from 'react'

export default function Cartitem({item,value}) {
    // const{id,title,count,price,img,total}=item
    // const{increment,decrement,clearproducts}=value

    return (
        <div>
            {
                console.log("props from Cartitem",item)
            }
        </div>
    )
}
