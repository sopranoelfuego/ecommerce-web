import React, { Component } from 'react'
import {Context_consumer} from './ContextAPI'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import DynamikTitle from './DynamikTitle'


export class Detail_in_one extends Component {
    render() {
        const{id,title,img,price,company,info,incart}=this.props.detail_item
        return (
            <componentcontainer className='container'>
                
            <DynamikTitle name={title} title='model'/>
             <div className='row pb-5 px-3'>
                 {/* column  which takes products aside*/}
                
                 <div className='col-10 col-md-6 mx-auto my-2'>
                     <div className='row bg-secondary mr-2'>
                         <div className='col-6 mx-auto text-center'>
                            <h3><strong>products in stores</strong></h3>
                         </div>
                     </div>
                     <div className='row align-items-center'>

                     
                   <Context_consumer>
                       {
                          (value)=>{
                              return value.product_inStore.map(
                                  data=> {return (
                                      <div className='card'>
                                          <div className='img-container'>
                                                <div className='card-img-top mr-3'>
                                                    <img  src={data.img} alt='image' className='img-fluid' style={{width:'300px',height:'300px'}}/>
                                                </div>
                                         </div>
                                      </div>
                                  )
                                }
                              )
                          }
                       }
                   </Context_consumer>
                   </div>

                 </div>
                  {/* column  which takes the details on another side*/}
                  <div className='col-10 mx-auto col-md-6 my-2 '>
                      <div className='row bg-secondary '>
                            <div className='col text-center text-capitalize display-3'>
                                <h3>{title}</h3>
                                </div> 
                            </div>
                            
                     <div className='row bg-link '>
                        
                        <div className='row'>
                             <div className='col col-12 col-md-8 col-lg-12 '>
                                 <img src={img} className='img-fluid' style={{width:'100%',height:"100%"}}/>                             </div>
                        </div>
                        <div className='col col-10 col-md-6  mx-5'>
                            
                            <div className='row'>  
                                    <p className='text-containerinfo'><strong>campany: </strong ><strong><span>{company}</span></strong></p>
                            </div>
                            <div className='row'>
                                    <p className='text-containerinfo'><strong>price: </strong><strong className='info_Values'>{price}k bif</strong></p>
                            </div>
                            <div className='row'>
                           <p className='text-capitalize'><strong className='text-containerinfo'>info: </strong><strong className='text-muted text-infoAside'>{info}</strong></p>
                            </div>
                            <div className='row'>
                                    <div className='col-6 '>
                                          <Link to='./'>  
                                            <button className='btn btn-lg btn-outline-info'>
                                            <i class="fas fa-reply"/><span className='text-capitalize'> return shopping</span>
                                            </button>
                                            </Link>
                                    </div>
                                    <div className='col-6 '>
                                    <Context_consumer>
                                        {
                                            (value)=>{
                                                return(
                                                    
                                                        <buttons className='btn btn-lg btn-outline-primary' disabled={incart?true:false} onClick={
                                                            ()=>{
                                                                return  value.addTocart(id);
                                                                      value.openModal(id)
                                                                      
                                                            }
                                                        }>
                                                            <i className='fas fa-shopping-cart'/><span>{incart?'already in cart':'add to the cart'}</span>
                                                        </buttons>

                                                   
                                                )
                                            }
                                        }
                                    </Context_consumer>
                                    </div>
                            </div>
                        </div>
                     </div>
                </div>

             </div>

            </componentcontainer>
        )
    }
}

export default Detail_in_one

const componentcontainer=styled.div`

    padding:0;
    margin:0;
`;