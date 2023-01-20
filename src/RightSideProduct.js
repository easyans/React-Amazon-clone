import React from 'react'
import "./RightSide.css"
import Rating from '@mui/material/Rating';

function RightSideProduct(props) {
  return (
    <div className='products'>

        <div className='product_img'>
            <img src={props.items.image} height="280px"/>
        </div>

        <div className='product_title'>
            {props.items.title}
        </div>
        <div className='product_rating'>
            <Rating name='read-only' value="4" style={{fontSize: "20px"}} readOnly />
            {props.items.rating}
        </div>
        <div className='product_price'>
            ₹{props.items.price}
        </div>

    </div>
  )
}

export default RightSideProduct