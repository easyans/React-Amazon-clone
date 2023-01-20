import React from 'react'
import './Product.css' ;
import {Link} from "react-router-dom"

function ProductFour() {
  return (
    <>
      <div className='product'>
        <div className='product__title'>
        <h2>Up to 60% off on home appliances</h2>
        </div>
        <div className='body'>
        <div className='product__body'>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg' className='img_four'/>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg'className='img_four'/>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg'className='img_four'/>
            <img src='https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg'className='img_four'/>
        </div>
        </div>
        <Link to='/displaycontent'>
          <div className='product__footer'>See More</div>
        </Link>
    </div>
    </>

  )
}

export default ProductFour