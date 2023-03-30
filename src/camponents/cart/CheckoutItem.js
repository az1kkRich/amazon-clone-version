import { color } from '@mui/system';
import React from 'react';
import './cart.css'

function CheckoutItem(props) {
    
    return (

        <>
            <div className='cart_item' >

                <img src={props.definition.img} className='img_cart' alt="" />

                <div className="infogap">
                    <div className="text_des" style={{ fontSize: '26px', lineHeight: '32px', fontWeight: 'bold' }}>{props.definition.name}</div>
                    <div className="text_des">Price: <span className='price_tag'>{props.definition.price} $</span></div>
                    <div className="text_des">In Stock</div>
                    
                </div>


            </div>
            

        </>

    );
}

export default CheckoutItem;