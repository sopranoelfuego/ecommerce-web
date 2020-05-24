import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Contextconsumer} from './ContextAPI'

class Products extends Component {
    render() {
        const{id,img,title,price,inCart}=this.props.item
        return (
            <ProductWrapper className='col-10 col-lg-4 mx-auto mb-5 px-5'>
                 <div className='card'>
                    
                      <Contextconsumer>
                          {
                            value=>{
                                return (

                                    <div className='img-container' onClick={()=>{value.handleDetail(id)}} > 
                          <Link to='/Details'>
                              <img src={img} alt='img for product' className='card-img-top' style={{paddingTop:'30px',paddingBottom:'30px'}}/>
                          </Link>

                        <button disabled={inCart?true:false} className='cart-btn btn-lg btn-success dispaly-2 pr-4' onClick={()=>{value.addTocart(id) ;value.openModal(id)}}>
                            {
                                inCart?<i class="fas fa-check-circle" style={{fontSize:'35px'}}></i>:<i className='fas fa-cart-plus' />
                            }

                        </button>
                    </div>
                                )
                            }
                          }
                      </Contextconsumer>



                    {/* card-footer */}
                    <div className='card-footer d-flex justify-content-between'>
                        <Paragraph className='align-self-center mb-0'>{title}</Paragraph>
                        <H5>{price}
                           <span >k</span>
                           <span className='ml-1'>bif</span>
                        </H5>
                    </div>
                 </div>
                 
            </ProductWrapper>
        )
    }
}

export default Products

const ProductWrapper=styled.div`
  border-color:transparent;
  transition:all 1s linear;
  .card-footer{
      background:transparent;
      border-top:transparent;
  }
&:hover{
    .card{
        border:0.08rem solid #44bd32;
        box-shadow:2px 2px 2px 0 #44bd32;
    }
   .card-footer{
       background:rgb(235, 235, 224);
      }
   }
   .img-container{
       position:relatives;
       overflow:hidden;
   }
   .img-container:hover .card-img-top {
       transform:scale(1.2);
       transition:all 1s linear;

   }
   .cart-btn{
       position:absolute;

   }
`;
const Paragraph=styled.p`
   font-family:'oswald'!important;
   color:var(--mainGrey);
   font-size:1.5rem;
`;
const H5=styled.h5`
   font-family:'oswald'!important;
   color:var(--mainGrey);
   font-size:2rem;
   font-weight:italic;
`;