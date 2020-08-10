import React from 'react';
import './Brand.css';

const Brand = ()=>{
    return(
        <div className='brand'>
            <img className='brand-logo' src={require('../Images/brand.png')} alt="Mobile World"/>
            <span className='brand-name'>Music World</span>
        </div>
    )
}

export default Brand;