import React from 'react'
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate(); // Hook for navigation

  const handleSignupClick = () => {
    navigate("/signup"); // Navigate to the signup page
  };
    return ( 

        <div className='container p-5 '>
            <div className='row text-center '>
                <img src='media/images/homeHero.png' alt='err' className='mb-5'/>
                <h1 className='mt-5' >Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button onClick={handleSignupClick} className='p-2 btn btn-primary fs-5 ' style={{width:"20%" ,margin:'0 auto'}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;