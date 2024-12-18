import React from 'react'
import { useNavigate } from "react-router-dom";

function OpenAccount() {
    const navigate = useNavigate(); // Hook for navigation

  const handleSignupClick = () => {
    navigate("/signup"); // Navigate to the signup page
  };
    return ( 
        <div className='container p-5 '>
            <div className='row text-center '> 
                <h1 className='mt-5' >Open a SmartInv account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button onClick={handleSignupClick} className='p-2 btn btn-primary fs-5 ' style={{width:"20%" ,margin:'0 auto'}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default OpenAccount;