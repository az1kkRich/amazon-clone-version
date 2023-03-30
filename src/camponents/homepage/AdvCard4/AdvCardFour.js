import React from 'react';
import './advcard.css'
function AdvCardFour(props) {
    return (
        <div className="advone_main">
            <div className="advone_header">
                iPhone phones | Up to 10% off
            </div>
            <div className="advone_body">
                <img src="https://m.media-amazon.com/images/I/41CYvvlV6HL._AC_SX679_.jpg" className='advone_img' alt="" />
                <img src="https://m.media-amazon.com/images/I/61FZC+6hDFL._AC_SX679_.jpg" className='advone_img' alt="" />
                <img src="https://m.media-amazon.com/images/I/818c+mtMgwL._AC_SX679_.jpg" className='advone_img' alt="" />
                <img src="https://m.media-amazon.com/images/I/61SQMIxTBUL._AC_SX679_.jpg" className='advone_img' alt="" />
            </div>
            <div className="advone_footer">
                <a href="/">See more</a>
            </div>
         </div>
    );
}

export default AdvCardFour;