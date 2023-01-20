import React from 'react'
import './SignInPage.css'
import {Link} from 'react-router-dom'
import {useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
// import { initializeApp } from 'firebase/app';
// import {firebaseConfig} from './firebase' ;
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase'
import { CartContext } from './CartContext';

function SignInPage() {

    const {item,size,increment,decrement,adduser} = useContext(CartContext)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const app = initializeApp(firebaseConfig);
    // const auth = getAuth();

    const navigate = useNavigate();


    const SignIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword (email, password).then((auth) =>{
            if(auth){
                navigate("/")
            }
        }).catch(error => alert(error.message));
        
    }

  return (
    <div className='main'>
        <Link to='/'>
            <div className='amazon_logo'>
                <img className='header__logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />
            </div>
        </Link>

        <div className='signIn_main'>
            <div className='signIn_box'>
                <div className='signIn'>
                    Sign-In
                </div>

                <div className='signin_title'>
                    Email or mobile phone number
                </div>
                
                <div className='signIn_input'>
                    <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div className='signin_title'>
                    Password
                </div>
                
                <div className='signIn_input'>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>

                <div className='signInContinue_btn'>
                    <button type='submit' onClick={SignIn}>Continue</button>
                </div>

                <div className='signIn_footer'>
                    <small>By continuing, you agree to Amazon's <a href='#'>Conditions of
                    Use</a> and <a href='#'>Privacy Notice</a>.</small>
                </div>

                <div>
                    <a href='#'>Need help?</a>
                </div>
            </div>

            <div className='newToamazon'>
            
            <p className='para'>New to Amazon?</p>

            <Link to='/signUpPage'>
                <div className='create'>
                    <button>Create Your Amazon account</button>
                </div>
            </Link>
        </div>

        </div>

        <div className='footer'>
            <a href='#'>Conditions of Use</a>
            <a href='#'>Privacy Notice</a>
            <a href='#'>Help</a>
        </div>

        <div className='footer_p'>
            <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>

    </div>
  )
}

export default SignInPage
