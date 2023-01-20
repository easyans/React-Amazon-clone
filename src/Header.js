import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import {Link} from "react-router-dom"
import React, {useContext, useState} from 'react'
import { CartContext } from './CartContext';
import {auth} from './firebase'
// import { getAuth, onAuthStateChanged,signOut  } from "firebase/auth";
// import { initializeApp } from 'firebase/app';
// import {firebaseConfig} from './firebase' ;
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate();

    // const app = initializeApp(firebaseConfig);

    // const auth = getAuth();

    //  const [userr, setUserr] = useState('');

    const {size} = useContext(CartContext)

    const user = auth.currentUser;

    // auth.onAuthStateChanged((user) => {
    //     if(user){
    //         setUserr(user);
    //     }else{
    //         setUserr(null);
    //     }
    //   });

      const Signout = ()=>{
        auth.signOut().then(() => {
            navigate('/signInPage')
            
          }).catch((error) => {
            alert(error.message);
          });
      }

  return (
      <>
    <div className="header">
        <Link to="/">
            <img className='header__logo'
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        </Link>

       <div className='header__nav'>
           <LocationOnOutlinedIcon className='header__location' />
       <div className='header__option'>
       <span className='optionLineOne'>
            Hello
        </span>
        <span className='optionLineTwo'>
            Select Your Address
        </span>
       </div>
       </div>
        
        <div className='header__search'>
            <div>
                <select className='header__dropdown'>
                    <option value="All">All</option>
                    <option value="Alexa">Alexa Skills</option>
                    <option value="Baby">Baby</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Books">Books</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                </select>
            </div>
            <input className='header__searchInput'
            type="text"/>
            <SearchIcon className='header__searchIcon' />
        </div>

        <div className='header__nav'>
            <div className='header__option'>
            {/* <span className='optionLineOne'>
                            Hello Guest
                        </span>
                            <button className='optionLineTwo link'>
                                Sign Out
                            </button> */}
                {user ? (<>
                    <div>
                        <span className='optionLineOne'>
                            Hello {user.email}
                        </span>
                            <button onClick={Signout} className='optionLineTwo link'>
                                Sign Out
                            </button>
                        </div></> )
                        :
                        (<>
                            <span className='optionLineOne'>
                                Hello Guest
                            </span>
                            <Link to='/signInPage' className='link'>
                                <span className='optionLineTwo'>
                                    Sign In
                                </span>
                            </Link>
                            </> )
                }
                
            </div>

            <div className='header__option'>
            <span className='optionLineOne'>
                    Returns
                </span>
                <span className='optionLineTwo'>
                   & Orders
                </span>
            </div>

            <div className='header__option'>
            <span className='optionLineOne'>
                    Your
                </span>
                <span className='optionLineTwo'>
                    Prime
                </span>
            </div>

            <Link to='/checkout'>
                <div className='header__optionBasket'>
                    <AddShoppingCartIcon />
                    <span className='optionLineTwo header__basketCount'>
                    {size}
                    </span>
                </div>
            </Link>
        </div>
    </div>
    <div className='header__footer'>

        <div className='header__footerText'>Best Sellers</div>
        <div className='header__footerText'>Mobiles</div>
        <div className='header__footerText'>Customer Service</div>
        <div className='header__footerText'>Today's Deals</div>
        <div className='header__footerText'>Fashion</div>
        <div className='header__footerText'>Electronics</div>
        <div className='header__footerText'>Prime</div>
        <Link to='/displaycontent' className='link'>
        <div className='header__footerText'>Home & Kitchen</div>
        </Link>
        <div className='header__footerText'>Amazon Pay</div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/ACQ/ho_SWM_400x39_2a1._CB623007921_.jpg"
         className='header__footerImg' />
    </div>
    </>
  )
}

export default Header
