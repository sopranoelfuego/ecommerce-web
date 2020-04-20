import React from 'react'
import styled from 'styled-components'
export default function Emptycart() {
    return (
        <div className='container text-center text-infoAside'>
            <div className='alert alert-danger m-5'>
                 <h2 className='text-capitalize text-center text-black'>
                        
                        <h2>cart is empty</h2>
                 </h2>
            </div>
        </div>
    )
}
// const empty_container=styled.div`
//   padding:0;
//   right:0;
//   left:0;
//   botton:0;
//   top:0;
//   background:rgba(0,0,0.3);
//   align-items:center;
//   i{
//       font-size:13rem;
//       color:white;
//   }
// `;

