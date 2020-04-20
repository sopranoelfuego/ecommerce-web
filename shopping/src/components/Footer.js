import React, { Component } from 'react'
import styled from 'styled-components'
 class Footer extends Component {
    render() {
        return (
        
            <Footer_container className='main-footer'>
                <div className='footer-middle'>
                <div className='container text-secondary'>
                    <div className='row'>
                         <div className='col-md-3 col col-sm-6'>
                            <p>
                                <h2 className="text-light">contact us on</h2>
                                <address className="text-light">+25769778171</address>
                                <address><small>aubinjaja@gmail.com</small></address>
    {/*                             
                                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div> */}
    
                            </p>
                        </div>
                        <div className='col-md-3 col col-sm-6'>
                            <ul className='list-unstyled ml-auto'>
                                <li className="text-light">caporla </li>
                                <li><a href="/">chefu</a> </li>
                                <li><a href="/">intwazangabo</a> </li>
                                <li><a href="/">mugisirikare</a> </li>
                            </ul>
                        </div>
                        <div className='col-md-3 col col-sm-6'>
                        <ul className='list-unstyled ml-auto'>
                                <li className="text-light">caporla </li>
                                <li><a href="/">chefu</a> </li>
                                <li><a href="/">intwazangabo</a> </li>
                                <li><a href="/">umusirikare</a> </li>
                            </ul>
                        </div>
                        <div className='col-md-3 col col-sm-6'>
                        <ul className='list-unstyled text-left '>
                                <li className="text-light" >caporla </li>
                                <li><a href="/">chefu</a> </li>
                                <li><a href="/">intwazangabo</a> </li>
                                <li><a href="/">umusirikare</a> </li>
                                
                <Button className="btn btn-outline-danger btn-lg">hold on</Button>
                            </ul>
                        </div>
                        <div className='foote-bottom'>
                             <div className='text xs-center'>
                                 &copy;{new Date().getFullYear()} my first application all right-reserved
                             </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </Footer_container>
           
        )
    }
    
}
 export default Footer
 const Footer_container=styled.footer`
      .footer-middle {
          background:var(--mainDark);
          padding-top: 3rem;
          font-size: 30px;
          position:relative;
          margin-bottom:0px;
      }
      .main-footer{
          margin-botton:0;
      }
      .foote-bottom {
          padding-top: 4rem;
          padding-bottom:2rem;
          font-size:25px;
      }
      li,a{
          text-decoration:none;
          color:var(--mainGrey);
    
      }
      li a:hover {
          color:var(--mainLightGrey);
      }
       
    `;
    const Button=styled.button`
            color:red;
            border:2px solide palevioletred!important;
            border-radium:10px;
            margin-top:1rem;
    
            
    `;
    const Copyright=styled.footer`
       .foote-bottom {
           padding-top:1rem;
       }
    `;   