import React, { Component, createContext } from 'react';

export const CartContex = createContext();
class CartContextProvider extends Component {
    constructor(props) {
        super(props);
        let existingCart = localStorage.getItem('myCart') != undefined ? JSON.parse(localStorage.getItem('myCart')) : []
        let cartAmount = existingCart.length
        this.state = { 
            item: existingCart,
            size: cartAmount,
            increment: (value) => {
                let itemList = this.state.item;
                itemList.push(value);

                this.setState({ item: itemList });
                this.setState({ size: this.state.item.length });

                this.state.saveToLacalCashe();
            },
            saveToLacalCashe: () => {
                localStorage.setItem('myCart', JSON.stringify(this.state.item))
            }
        };
        
    }
    
    render() {
        return (
            <div>
                <CartContex.Provider value={{...this.state, ...this.increment}}>
                    {this.props.children}
                </CartContex.Provider>
            </div>
        );
    }
}

export default CartContextProvider;