import { ThirtyFpsOutlined } from '@mui/icons-material';
import React, { Component, createContext } from 'react';

export const CartContext = createContext();

class CartContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            item: [],
            size: 0,
            increment: (value) =>{
                let itemList= this.state.item;
                itemList.push(value);

                this.setState( { item: itemList } );
                this.setState( { size: this.state.item.length });
            },
            decrement: (value) =>{
                let itemList= this.state.item;
                itemList.splice(value,1);

                
                this.setState( { item: itemList } );
                this.setState( { size: this.state.item.length });
            },
         }
    }
    render() { 
        return ( 
            <CartContext.Provider value={{ ...this.state,...this.increment,...ThirtyFpsOutlined.decrement}} >
                {this.props.children}
            </CartContext.Provider>
         );
    }
}
 
export default CartContextProvider;