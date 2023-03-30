import { Grid, Rating } from '@mui/material';
import {  Link, useParams  } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react';
import './order.css'
import { CartContex } from '../CartContex';

function PlaceOrder(props) {
    const {item, size, increment} = useContext(CartContex);
    const [proDetail, setproDetail] = useState([]);
    
    let { id } = useParams();

    const addToCart = function() {
        increment(proDetail);
        console.log(increment);
    }

    useEffect (() => {
        let list = [
            {id:'ios14pro',
             name:'iPhone 14 Pro Max | 1TB (Blue)',
              rating:'3,567', price:'14000',
               img:'https://m.media-amazon.com/images/I/61SQMIxTBUL._AC_SX679_.jpg'},
            {id:'ios13pro',
             name:'iPhone 13 Pro | 512GB (Black)',
              rating:'5,567', price:'12000',
               img:'https://m.media-amazon.com/images/I/61FZC+6hDFL._AC_SX679_.jpg'},
            {id:'ios14plus',
             name:'iPhone 14 Plus | 256GB (Black)',
              rating:'4,767', price:'13000',
               img:'https://m.media-amazon.com/images/I/818c+mtMgwL._AC_SX679_.jpg'},
            {id:'ios12pro',
             name:'iPhone 12 Pro Max | 512GB (White)',
              rating:'8,567', price:'10000',
               img:'https://m.media-amazon.com/images/I/51f6+2B8RiL._AC_SX466_.jpg'},
            {id:'ios11',
             name:'iPhone 11 | 64GB (Black)',
              rating:'13,567', price:'8000',
               img:'https://m.media-amazon.com/images/I/41CYvvlV6HL._AC_SX679_.jpg'}
        ]
        let item = list.filter( item => {
            if(item.id===id) return item;
        }, [] )

        console.log(item);
        setproDetail(item[0]);
    },[id]);
    return (
        <div>
            <Grid container >
                <Grid item xs={5}>
                    <img src={proDetail.img} className='img_order' alt="" />
                    
                </Grid>
                <Grid item xs={4}>
                    <div className="pleacholder_discription">
                        <div style={{ fontSize: '26px', lineHeight: '32px', fontWeight: 'bold' }}>{proDetail.name}</div>
                        <div className="">
                            <Rating onChangeActive  style={{ fontSize: '20px' }} />
                                
                        </div>
                        {proDetail.rating} rating | 100+ answered questions
                        <hr />
                        <div className="text_des">Price: <span className='price_tag'>{proDetail.price} $</span> </div>
                        <div className="text_des">FREE delivery: <strong> Monday, Aug 29 </strong></div>
                        <div className="text_des">EMI starts at 200$. No Cost EMI aviable</div>
                        <div className="mt-3"></div>
                        <div className="">
                            <div style={{ fontSize: '26px', lineHeight: '32px', fontWeight: 'bold' }}>About this item: </div>
                            <ul>
                                <li>6.1 inch HD LCD display</li>
                                <li>Water resistant (IP68)</li>
                                <li>Dual-Camera(12MP)</li>
                                <li>NIght Mode, Cinema mode</li>
                                <li>4k Video, 90FPS</li>
                            
                            </ul>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <div className='plch_order'>
                    <div className="">
                            <div style={{ fontSize: '20px', lineHeight: '32px', fontWeight: 'bold' }}>Add an Accessory: </div>
                            <label className='label_left'>
                                <input type="checkbox" /> Apple AirPods
                            </label>
                            <label className='label_left'>
                                <input type="checkbox"  /> Apple Usb Power
                            </label>
                        </div>
                        <div className="mt-3"></div>
                        
                            <button className='plch_butt cart' onClick={addToCart}>Add to Cart</button>
                        <Link to='/cart'>
                            <button className='plch_butt buy'>Buy now</button>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default PlaceOrder;