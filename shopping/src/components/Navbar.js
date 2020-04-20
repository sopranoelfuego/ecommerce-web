import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.jpg'
import styled from 'styled-components'

// import './sytlenav.css'
import ProductList from './ProductList'


export class Navbar extends Component {
    render() {
        return (
           
            <navbarstyle class="navbar navbar-expand-sm navbar-light bg-success ">
                
                
                <ul class="navbar-nav align-items-center unstyled-list">
                      <li className='nav-item'>
                            <Link class="navbar-brand" to='/'>
                        <h1 ><a style={{fontFamily:'permanent marker',color:'black',textDecoration:'none'}}>innerStore</a></h1>
                        </Link>
                      </li>
                    <li class="nav-item ">
                       <Link to='./'> 
                      <h5><a class="nav-link"  style={{fontSize:'40px',fontFamily:'permanent marker',hover:'blue'}}>products</a></h5>
                      </Link>
                </li>
                 </ul>
                 <Link to=
                 './Cart_product'className='ml-auto'>
                     <Buttonstyle className='btn btn-outline-success btn-lg btn-light mr-5'> <strong style={{fontFamily:'oswald'}}><i class="fas fa-cart-plus" ><span className='ml-2'>my cart</span></i></strong></Buttonstyle>
                 </Link>
                
         </navbarstyle>
            

                
        )
    }
}

export default Navbar
const navbarstyle =styled.nav`
   
   i:hover {
       color:var(--mainBlue);
       cursor:pointer;
   }
   
   h1{
       margin-left:6rem;
   }
   a:hover{
       cursor:pointer;
       text-decoration:none;
   }
   h5{
       font-size:3rem;
   }
   ul li{
       justify-content:space-between;
       list-style-type:none;
   }
   ul li a{text-decoration:none;}
   
`;
const Buttonstyle=styled.button`
    font-size:1.43rem;
    border:0.05rem solid white;
    border-radius:10%;
    background:transparent;
    color:white;
    margin:0 0.2rem;
    transition:all 0.51s ease-in-out;
   &:hover{
       color:grey;
       background:white;
       font-size:1,44rem;

   }
   .cart-btn{
       transform:translate(100%,100%);

   }
   
`;

