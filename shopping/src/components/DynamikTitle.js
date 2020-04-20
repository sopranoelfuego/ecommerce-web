import React, { Component } from 'react'
import styled from 'styled-components'

export class DynamikTitle extends Component {
    
    render() {
        const {name,title}=this.props
        return (
            <div className='container'>
                 <div className='row container pb-3'>
                     <div className='row row-10 mx-auto text-center text-title'>
                        <h5 className='display-4'><strong><Span className='display-4 ml-2' style={{color:'black',marginLeft:'10px'}}>{name}</Span>{title}</strong></h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default DynamikTitle

const Span=styled.span`
    color:var(--mainBlack);
    font-size:4rem;
`;