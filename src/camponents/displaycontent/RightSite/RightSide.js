import {  Link  } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Product from './Product';
import './right.css'


function RightSide(props) {
    const [ListProduct, setListProduct] = useState([]);
    useEffect (() => {
        let list = [
            {id:'ios14pro', name:'iPhone 14 Pro Max | 1TB (Blue)', rating:'3,567', price:'14400', img:'https://m.media-amazon.com/images/I/61SQMIxTBUL._AC_SX679_.jpg'},
            {id:'ios13pro', name:'iPhone 13 Pro | 512GB (Black)', rating:'5,567', price:'12400', img:'https://m.media-amazon.com/images/I/61FZC+6hDFL._AC_SX679_.jpg'},
            {id:'ios14plus', name:'iPhone 14 Plus | 256GB (Black)', rating:'4,767', price:'13400', img:'https://m.media-amazon.com/images/I/818c+mtMgwL._AC_SX679_.jpg'},
            {id:'ios12pro', name:'iPhone 12 Pro Max | 512GB (White)', rating:'8,567', price:'10400', img:'https://m.media-amazon.com/images/I/51f6+2B8RiL._AC_SX466_.jpg'},
            {id:'ios11', name:'iPhone 11 | 64GB (Black)', rating:'13,567', price:'8400', img:'https://m.media-amazon.com/images/I/41CYvvlV6HL._AC_SX679_.jpg'}
        ]
        setListProduct(list);
    },[]);
    return (
        <div className='RightSize_main'>
            <div className="Product_card">
                {
                    ListProduct.map( (item)=>(
                        <Link to={'/detail/'+item.id} className="tdn">
                            <Product def={item} />
                        </Link>
                    ))
                }
            </div>

        </div>
    );
}

export default RightSide;