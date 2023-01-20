
import './PlaceOrder.css'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {useParams} from 'react-router-dom' ;
import React, {useContext, useEffect,useState} from 'react'
import { CartContext } from '../CartContext';
import {Link} from 'react-router-dom'

function PlaceOrder() {

    const [productDetails,setProductDetails] = useState([]);

    const {item,size,increment,decrement} = useContext(CartContext)

    let {id} = useParams();

    const addToCart = () => {
        increment(productDetails);
    }

    useEffect(()=>{
    
        let lists = [
          {id:123,
            title:"VALDIVIAN Polyester Curtain Magnetic Holder and Tassel Curtain tie Backs for Door Curtains (Gold, 2Pc)",
            rating:"", 
            emi:"2401",
            price:"1600",
            delivery: "Thursday, sept 18",
            status: "In stock",
            soldby: "Dhanu",
            image:"https://m.media-amazon.com/images/I/7140rDurvYL._AC_UL320_.jpg",
            about: [
              "Material: Well made of high quality soft Room Darkening Velvet material, No chemical coating or pungent smell, energy efficient and privacy protected. Light Control: With these luxury blackout velvet panels you get 75% sunlight out for bedtime, 0 TV glares for your favorite game and absolute privacy with all your indoor activity.",
              "Size - 4 ft x5 ft or 121 cm x 152 cm or 48 inch x 60 inch velvet Room Darkening Curtains for living room; Package Contents: 2 Piece Velvet Curtains Maroon",
              "Functions: Reduce energy costs by cutting the amount of sunlight and UV rays that enter the room, they protect furniture and floors from sun damage and fading. Energy Smart: These thermal insulated curtains will make a budget noticeable difference, lower your heating & cooling cost by preventing sunlight & draft from getting in.",
            ],
          },
          {id:1234,
            title:"SEOUL Velvet Embossed Damask Blackout Window Curtains for Bedroom Living Room Office Home Décor Velvet Curtains for Window (5 Feet, Maroon) - Pack of 2",
            rating:"", 
            emi:"2401",
            price:"1299",
            delivery: "Wednesday, Aug 18",
            status: "In stock",
            soldby: "XYZ company",
            image:"https://m.media-amazon.com/images/I/81iFBS+HiYL._AC_UL320_.jpg",
            about: [
              "Material: Well made of high quality soft Room Darkening Velvet material, No chemical coating or pungent smell, energy efficient and privacy protected. Light Control: With these luxury blackout velvet panels you get 75% sunlight out for bedtime, 0 TV glares for your favorite game and absolute privacy with all your indoor activity.",
              "Size - 4 ft x5 ft or 121 cm x 152 cm or 48 inch x 60 inch velvet Room Darkening Curtains for living room; Package Contents: 2 Piece Velvet Curtains Maroon",
              "Functions: Reduce energy costs by cutting the amount of sunlight and UV rays that enter the room, they protect furniture and floors from sun damage and fading. Energy Smart: These thermal insulated curtains will make a budget noticeable difference, lower your heating & cooling cost by preventing sunlight & draft from getting in.",
            ],
          },
          {id:12345,
            title:"BLACK OAK Uv 3 Seater Chesterfield Sofa Couch Chaise",
            rating:"", 
            emi:"2401",
            price:"10999",
            delivery: "Thursday, sept 18",
            status: "In stock",
            soldby: "X Enterprises",
            image:"https://m.media-amazon.com/images/I/61A0oAUTSxL._AC_UL320_.jpg",
            about: [
              "Material: Well made of high quality soft Room Darkening Velvet material, No chemical coating or pungent smell, energy efficient and privacy protected. Light Control: With these luxury blackout velvet panels you get 75% sunlight out for bedtime, 0 TV glares for your favorite game and absolute privacy with all your indoor activity.",
              "Size - 4 ft x5 ft or 121 cm x 152 cm or 48 inch x 60 inch velvet Room Darkening Curtains for living room; Package Contents: 2 Piece Velvet Curtains Maroon",
              "Functions: Reduce energy costs by cutting the amount of sunlight and UV rays that enter the room, they protect furniture and floors from sun damage and fading. Energy Smart: These thermal insulated curtains will make a budget noticeable difference, lower your heating & cooling cost by preventing sunlight & draft from getting in.",
            ],
          },
          {id:123456,
            title:"SEOUL Velvet Embossed Damask Blackout Window Curtains for Bedroom Living Room Office Home Décor Velvet Curtains for Window (5 Feet, Maroon) - Pack of 2",
            rating:"", 
            emi:"2401",
            price:"1299",
            delivery: "Thursday, sept 18",
            status: "In stock",
            soldby: "Darsh",
            image:"https://m.media-amazon.com/images/I/81iFBS+HiYL._AC_UL320_.jpg",
            about: [
              "Material: Well made of high quality soft Room Darkening Velvet material, No chemical coating or pungent smell, energy efficient and privacy protected. Light Control: With these luxury blackout velvet panels you get 75% sunlight out for bedtime, 0 TV glares for your favorite game and absolute privacy with all your indoor activity.",
              "Size - 4 ft x5 ft or 121 cm x 152 cm or 48 inch x 60 inch velvet Room Darkening Curtains for living room; Package Contents: 2 Piece Velvet Curtains Maroon",
              "Functions: Reduce energy costs by cutting the amount of sunlight and UV rays that enter the room, they protect furniture and floors from sun damage and fading. Energy Smart: These thermal insulated curtains will make a budget noticeable difference, lower your heating & cooling cost by preventing sunlight & draft from getting in.",
            ],
          },
          {id:1234567,
            title:"OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)",
            rating:"", 
            emi:"2401",
            price:"15450",
            delivery: "Thursday, sept 18",
            status: "In stock",
            soldby: "Anmol",
            image:"https://m.media-amazon.com/images/I/619n6kxuGsL._AC_UL320_.jpg",
            about: [
              "Desription for OnePlus",
              "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
              "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
              "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
              "Face ID for secure authentication",
            ],
          },
          {id:12345678,
            title:"VALDIVIAN Polyester Curtain Magnetic Holder and Tassel Curtain tie Backs for Door Curtains (Gold, 2Pc)",
            rating:"", 
            emi:"2401",
            price:"1600",
            delivery: "Thursday, sept 18",
            status: "In stock",
            soldby: "Darshita",
            image:"https://m.media-amazon.com/images/I/7140rDurvYL._AC_UL320_.jpg",
            about: [
              "Material: Well made of high quality soft Room Darkening Velvet material, No chemical coating or pungent smell, energy efficient and privacy protected. Light Control: With these luxury blackout velvet panels you get 75% sunlight out for bedtime, 0 TV glares for your favorite game and absolute privacy with all your indoor activity.",
              "Size - 4 ft x5 ft or 121 cm x 152 cm or 48 inch x 60 inch velvet Room Darkening Curtains for living room; Package Contents: 2 Piece Velvet Curtains Maroon",
              "Functions: Reduce energy costs by cutting the amount of sunlight and UV rays that enter the room, they protect furniture and floors from sun damage and fading. Energy Smart: These thermal insulated curtains will make a budget noticeable difference, lower your heating & cooling cost by preventing sunlight & draft from getting in.",
            ],
          },
          
        ]

        let itemfilter = lists.filter( item => {
          if(item.id== id) return item;
      })

        setProductDetails(itemfilter[0]) ;
    
      },[])

  return (
    <div className='placeorder_main'>
        <Grid container>
            <Grid item xs={5}>
                <img className='placeorder_image' src={productDetails.image} />
            </Grid>
            <Grid item xs={4}>
                <div className='placeorder_description'>
                    <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 450}}>
                    {productDetails.title}
                    </div>
                    <p>Brand:<span>Seoul</span></p>
                    <hr />

                    <div>

                        <div className='textgap'>
                            Price:<span className='pricetag'>₹ {productDetails.price}</span>
                        </div>
                        <div className="textgap">FREE delivery: <strong>{productDetails.delivery}</strong></div>
                        <div className="textgap">EMI starts at ₹ {productDetails.emi}. No Cost EMI available</div>
                        <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">{productDetails.status}</div>
                        <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
                    </div>
                    <br></br>

                    <div style={{fontSize:"24px" }} className="textgap">
                        About this item
                    </div>

                    <div className='about'>
                        <ul>
                            {
                              productDetails.about != undefined ?
                              (productDetails.about.map((item)=>{
                                return(
                                  <li>{item}</li>
                                )
                              })) : 
                              (null)
                            }
                        </ul>
                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
            <Paper variant="outlined" className="placeorder__order">
                        <div>
                            <div><strong>Without Exchange</strong></div>
                            <div>50,999</div>
                            <div style={{ marginTop: "10px"}}><strong>Add an Accessory</strong></div>
                            <div>
                                <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
                                <label><input type="checkbox" ></input>Apple 20W USB Power Adapter</label>
                            </div>
                            <div > 
                                
                                <button className="placeorder__button addtocart" onClick={addToCart} >Add to Cart</button>
                                <Link to='/checkout'>
                                <button className="placeorder__button buynow">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </Paper>
            </Grid>
        </Grid>
    </div>
  )
}

export default PlaceOrder