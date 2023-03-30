import React from 'react';
import './advone.css'

function CardOne(props) {
    return (
        <>
         <div className="advone_main">
            <div className="advone_header">
                New iPhone 14 Pro  | Up to 10% off
            </div>
            <div className="advone_body">
                <img src="https://m.media-amazon.com/images/I/61SQMIxTBUL._AC_SX679_.jpg" className='card_img' alt="" />
            </div>
            <div className="advone_footer">
                <a href="/">See more</a>
            </div>
         </div>
        </>
    );
}

export default CardOne;