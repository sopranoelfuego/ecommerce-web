import React, { Component } from 'react'
import styled from 'styled-components'
import {Context_consumer} from '../components/ContextAPI'
import {Link} from 'react-router-dom'

export class Modal extends Component {
    render() {
        return (
            <Context_consumer>
                {
                    (value)=>{
                        const {modalOpen,closeModal}=value
                        const {img,title,price}=value.modal_product
                        if(!modalOpen)
                         return null
                         else 
                             return (
                                <Style_Modal_container>
                                        <div className='container' > 
                                            <div className='row'>
                                                <div className='col-8 mx-auto col-md-6 col-lg-4 text-capitalize text-center p-5 mx-5' id='modal'>
                                                        <h5>hello this is modal</h5>
                                                        <img src={img} className='img-fluid' alt='image product'/>
                                                        <h5>
                                                            {title}
                                                        </h5>
                                                        <h5 className='text-muted'>
                                                            price: {price}k bif
                                                        </h5>
                                                        <div className='row'>
                                                            <div className='col-12 mx-auto'>
                                                                <Link to='./'>
                                                                <button className='btn btn-block btn-primary text-capitalize' onClick={()=>{
                                                                    closeModal()
                                                                }}>
                                                                 <strong > continue shopping </strong>
                                                                </button>
                                                                </Link>
                                                                <Link>
                                                                <button className='btn btn-block btn-success mt-2 text-capitalize'>
                                                                 <strong> consult my cart</strong>
                                                                </button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                </Style_Modal_container>
                         
                             )
                    }
                }
            </Context_consumer>
        )
    }
}

export default Modal
const Style_Modal_container=styled.div`

 position:fixed;
 top:0;
 bottom:0;
 right:0;
 left:0;
 display:flex;
 align-items:center;
 justify-content:center;
 background:rgba(0,0,0,0.3);
#modal{
    background:var(--mainWhite);
}
`;