
import './Checkout.css'
import React, {useContext, useEffect,useState} from 'react'
import { CartContext } from './CartContext';
function Checkout() {

    const {item,size,increment,decrement} = useContext(CartContext)

    const cartTotalPrice = () =>{
        let price = 0;
        for(let i=0; i<item.length;i++){
            price += parseInt(item[i].price)
        }
        return price
    }

    const deleteCart = (i) =>{
        decrement(i);
    }

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <div className='shop_para'>Shopping Cart</div>
            <hr />

            {
                item.map((value,index)=>{
                    return(
                        <>
            <div className='checkout_box'>
                <div className='box_img'>
                    <img src={value.image} />
                </div>
                <div className='checkout_content'>

                    <div className='content_title'>  
                        {value.title}
                    </div>
                    <div className='price'>₹{value.price}</div>
                    <div className='chec_stocl'>
                    <p className=''>{value.status}</p>
                    <p>Sold by {value.soldby}</p>
                    </div>

                    <div className='checkout_delete'>
                        <button onClick={()=>deleteCart(index)}>Delete</button>
                    </div>

                </div>
            </div>
                        </>
                    )
                })
            }

        </div>

        <div className='checkout_right'>

            <div className='checkout_total'>
                Subtotal ({item.length} items):<span>₹ {cartTotalPrice()}</span>
            </div>
            
            <div className='buy_btn'>
                <button>Proceed to Buy</button>
            </div>
        </div>
    </div>
  )
}

export default Checkout
