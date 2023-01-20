import React, { useEffect, useState } from 'react'
import './RightSide.css'
import RightSideProduct from './RightSideProduct'
import {Link} from 'react-router-dom'

function RightSide() {
  const [listOfProduct, setListOfProduct] = useState([]);

  useEffect(()=>{
    
    let lists = [
      {id:123,
        title:"VALDIVIAN Polyester Curtain Magnetic Holder and Tassel Curtain tie Backs for Door Curtains (Gold, 2Pc)",
        rating:"", 
        price:"1600",
        image:"https://m.media-amazon.com/images/I/7140rDurvYL._AC_UL320_.jpg"
      },
      
      {id:1234,
        title:"SEOUL Velvet Embossed Damask Blackout Window Curtains for Bedroom Living Room Office Home Décor Velvet Curtains for",
        rating:"",
        price:"1299",
        image:"https://m.media-amazon.com/images/I/81iFBS+HiYL._AC_UL320_.jpg"
      },
      
      {id:12345,
        title:"BLACK OAK Uv 3 Seater Chesterfield Sofa Couch Chaise",
        rating:"",
        price:"10999",
        image:"https://m.media-amazon.com/images/I/61A0oAUTSxL._AC_UL320_.jpg"
      },

      {id:123456,
        title:"SEOUL Velvet Embossed Damask Blackout Window Curtains for Bedroom Living Room Office Home Décor Velvet Curtains for",
        rating:"",
        price:"1299",
        image:"https://m.media-amazon.com/images/I/81iFBS+HiYL._AC_UL320_.jpg"
      },
      {id:1234567, 
        title:"OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)",
        rating:"", 
        price:"15450",
        image:"https://m.media-amazon.com/images/I/619n6kxuGsL._AC_UL320_.jpg"
      },
      
      { id:12345678,
        title:"VALDIVIAN Polyester Curtain Magnetic Holder and Tassel Curtain tie Backs for Door Curtains (Gold, 2Pc)",
        rating:"", 
        price:"1600",
        image:"https://m.media-amazon.com/images/I/7140rDurvYL._AC_UL320_.jpg"
      },
    ]

    setListOfProduct(lists) ;

  },[])

  return (
    <div className='rightSide_main'>
      {
        listOfProduct.map((items)=>(
          <Link to={`/order/`+items.id} >
            <RightSideProduct items={items} />
          </Link>
        ))
      }
    </div>
  )
}

export default RightSide