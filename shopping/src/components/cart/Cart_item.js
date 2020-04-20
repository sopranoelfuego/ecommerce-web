import React from 'react'

export default function Cart_item({item,value}) {
    const{id,title,count,price,img,total}=item
    const{increment,decrement,clearproducts}=value
    return (
        <div>
            {
                console.log(item)
            }
        </div>
    )
}
