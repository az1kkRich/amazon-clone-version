import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import { CartContex } from '../CartContex';
import CheckoutItem from './CheckoutItem';

function Checkout(props) {
    const {item, size, increment} = useContext(CartContex);
    const cartValue = function() {
        let price = 0;
        for (let i=0; i<item.length; i++) {
            price += parseInt(item[i].price);
        }
        return price;
    }

    

    console.log(cartValue);
    return (
        <div>
            <Grid container>
                <Grid item={10}>
                    <h1 className='head1'>Shopping Cart</h1>
                    {
                        item.map((value) => (
                            <CheckoutItem definition={value} />
                        ))
                    }
                </Grid>
                <Grid item={2}>
                    <div className='plch_order1'>
                        <p> Selected <strong>{size}</strong>  items </p>
                        <h3 className='plchorder_text'>{cartValue()}$</h3>
                        <button className='plch_butt buy'>Buy now</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Checkout;