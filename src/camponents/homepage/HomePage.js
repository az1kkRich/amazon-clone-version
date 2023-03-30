import React, { Component } from 'react';
import './homepage.css'
import {  Link  } from "react-router-dom";
import CardOne from './Advertisemond/AdvCard1';
import AdvCardFour from './AdvCard4/AdvCardFour';

class HomePage extends Component {
    render() {
        return (
            <>
                <div className='homegape'>

                </div>
                <div className="index">
                    <Link to='/display' className='tdn' >
                        <div className='Cards'>
                            <CardOne />

                            <AdvCardFour />
                            <CardOne />
                            <AdvCardFour />
                            <CardOne />
                            <AdvCardFour />
                            <AdvCardFour />
                            <CardOne />

                        </div>
                    </Link>

                </div>
            </>
        );
    }
}

export default HomePage;