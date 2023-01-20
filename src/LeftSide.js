import React from 'react'
import './LeftSide.css'

function LeftSide() {
  return (
    <div className='leftSide_main'>

        <div className='leftSide_header'>
            Brand
        </div>
        <div className='leftSide_brand'>
            <label className='brandName'>
                <input type='checkbox' value='zarooni' />
                Zarooni
            </label>
            <label className='brandName'>
                <input type='checkbox' value='FAPBADARI' />
                FAPBADRI
            </label>
            <label className='brandName'>
                <input type='checkbox' value='generic' />
                Generic
            </label>
        </div>

        <div className='leftSide_price'>
            Price
        </div>

        <div>
            <label className='brandname'>Under ₹1,000</label><br />
            <label className='brandname'>₹1,000-₹5,000</label><br />
            <label className='brandname'>₹5,000-₹10,000</label><br />
            <label className='brandname'>₹10,000-₹20,000</label><br />
            <label className='brandname'>Over ₹20,000</label><br />
        </div>
    </div>
  )
}

export default LeftSide