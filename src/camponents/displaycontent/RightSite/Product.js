import React from 'react';
import './right.css'
import { Rating } from '@mui/material';

function Product(props) {
    return (
        <>
            <div className="header">
                
                <div className="card">
                    <div className="pro_img">
                        <img src={props.def.img} className='imgpro' alt="" />
                    </div>
                    <div className="pro_name">
                        {props.def.name}
                    </div>
                    <div className="pro_rating">
                        <Rating  value='4'  />
                        {props.def.rating} ratings
                    </div>
                    <div className="pro_price">
                        {props.def.price} $
                    </div>
                </div>
            </div>

        </>
    );
}

export default Product;