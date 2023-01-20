import React from 'react'
import './Product.css' ;
function Product() {
  return (
      <>
    <div className='product'>
        <div className='product__title'>
        <h2>Up to 70% off | Clearance store</h2>
        </div>
        <div className='body'>
        <div className='product__body'>
        <img className='img_one' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg'/>
        </div>
        </div>
        <div className='product__footer'>See More</div>
    </div>
    </>
  )
}

export default Product