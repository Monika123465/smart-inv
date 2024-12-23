import React, { useMemo, useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
 const [selectedMenu, setSelectedMenu] = useState(0);
 const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

 const handleMenuClick = (index) => {
  setSelectedMenu(index);
 };

 const handleProfileClick = (index) => {
  setIsProfileDropdownOpen(!isProfileDropdownOpen);
 };
 const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
 }

 const menuClass = "menu";
 const activeMenuClass = "menu selected";

 const username = useMemo(() => {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  return userDetails?.username;
 }, []);

 return (
  <div className='menu-container'>
   <img src='logo.png' style={{ width: "50px" }} alt='' />
   <div className='menus'>
    <ul>
     <li>
      <Link style={{ textDecoration: "none" }} to='/' onClick={() => handleMenuClick(0)}>
       <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
      </Link>
     </li>
     <li>
      <Link style={{ textDecoration: "none" }} to='/orders' onClick={() => handleMenuClick(1)}>
       <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
      </Link>
     </li>
     <li>
      <Link style={{ textDecoration: "none" }} to='/holdings' onClick={() => handleMenuClick(2)}>
       <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
      </Link>
     </li>
     <li>
      <Link style={{ textDecoration: "none" }} to='/positions' onClick={() => handleMenuClick(3)}>
       <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
      </Link>
     </li>
     <li>
      <Link style={{ textDecoration: "none" }} to='funds' onClick={() => handleMenuClick(4)}>
       <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
      </Link>
     </li>
     <li></li>
    </ul>
    
    <div className='profile' onClick={handleProfileClick}>
     <div className='avatar'>{username.split("")[0]}</div>
    <p className='username'>{username}</p>
    </div>
    <hr/>
    <div> 
     {username && (
      <div className='profile-dropdown mr-4'  >
       <button onClick={handleLogout}>Logout</button>
      </div>
     )}
    </div>
   </div>
  </div>  
  
 );
};

export default Menu;
