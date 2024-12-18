import React from 'react'
import { useNavigate } from "react-router-dom";






function Universe() {

  const navigate = useNavigate(); // Hook for navigation

  const handleSignupClick = () => {
    navigate("/signup"); // Navigate to the signup page
  };
    return ( 
        <div className="container mt-5">
      <div className="row text-center">
        <h1>The SmartInv Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
        
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" />
          <p className='text-small text-muted'>Themetic investment plateform</p>
        </div>

        <div className="col-4 p-3 mt-5">
        <img src="media/images/streakLogo.png" style={{width:'11rem'}}/>
        <p className='text-small text-muted'>Algo & strategy plateform</p>
        </div>

        <div className="col-4 p-3 mt-5">
        <img src="media/images/sensibullLogo.svg" style={{width:'12rem'}}/>
        <p className='text-small text-muted'>Options trading plateform</p>
        </div>

        <div className="col-4 p-3  mt-5">
          <img src="media/images/zerodhaFundhouse.png" style={{width:'14rem'}}/>
          <p className='text-small text-muted'>Asset management</p>
        </div>

        <div className="col-4 p-3 mt-5">
        <img src="media/images/goldenpiLogo.png" />
        <p className='text-small text-muted'>Bond trading plateform</p>
        </div>

        <div className="col-4 p-3 mt-5">
        <img src="media/images/dittoLogo.png" style={{width:'11rem'}}/>
        <p className='text-small text-muted'>Insurance</p>
        </div>
        <button  onClick={handleSignupClick}  className='p-2 btn btn-primary fs-5 ' style={{width:"20%" ,margin:'0 auto'}}>Sign up for free</button>
      </div>
    </div>
     );
}

export default Universe;