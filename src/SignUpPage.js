import React from 'react'
import './SignUpPage.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import { initializeApp } from 'firebase/app';
// import {firebaseConfig} from './firebase' ;
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase'


function SignUpPage() {


    // const app = initializeApp(firebaseConfig);
    // const auth = getAuth();

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [mobile,setMobile] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('');

    const SignUp = (e) => {
        e.preventDefault();
        if(name == "" || mobile == "" || email == "" || password == ""){
            alert("Invalid Input");
        }else if(mobile.length < 10){
            alert("Invalid Mobile Number");
        }else{
            auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
                if(auth){
                    navigate("/signInPage")
                }
            }).catch(error => alert(error.message));
        }

    }

  return (
    <div className='main'>
        <Link to='/'>
            <div className='amazon_logo'>
                <img className='header__logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' />
            </div>
        </Link>

        <div className='signUp_main'>
            <div className='signUp_box'>
                <div className='signUp'>
                    Create Account
                </div>

                <div className='signUp_title'>
                   <label>Your name</label><br />
                   <input type='text' value={name} onChange={(e)=>setName(e.target.value)} /><br />
                   <label>Mobile number</label><br />
                   <input type='number'  value={mobile} onChange={(e)=>setMobile(e.target.value)}  /><br />
                   <label>Email (optional)</label><br />
                   <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}  /><br />
                   <label>Password</label><br />
                   <input  type='password' value={password} onChange={(e)=>setPassword(e.target.value)}  /><br />
                   <small>Passwords must be at least 6 characters.</small>
                </div>
                
                <div className='signUp_para'>
                    <p>
                    We will send you a text to verify your phone.
                    Message and Data rates may apply.
                    </p>
                </div>

                <div className='signUpContinue_btn'>
                    <button type='submit' onClick={SignUp}>Continue</button>
                </div>

                <div className='signUpBox_footer'>
                    <small>Already have an account?<a href='#'>Sign in</a>
                    Buying for work?
                    <a href='#'>Create a free business account</a>.</small>
                </div>

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

export default SignUpPage