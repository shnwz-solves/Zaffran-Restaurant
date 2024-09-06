import React from 'react';
import "./about.css";
import image4 from "../images/cutlery.png";
import image25 from "../images/food.png";
import image26 from "../images/menu2.png";
import image21 from "../images/burger1.png";
export default function About(){
  return(
    <>
     <div  className='container about-cont'>
     <div className='row'>
     <div id='menu-section' className='column col-xs-3 align-items-center col-sm-3 align-items-center col-lg-3'>
             <div className='img-section'>
             <img src={image4} className='img-fluid' alt='...'/>
             </div>
             <p className='iconNames'>Order Food</p>
             </div>
             <div id='menu-section' className='column col-sm-3 align-items-center col-lg-3'>
             <div className='img-section'>
             <img src={image25} className='img-fluid' alt='...'/>
             </div>
             <p className='iconNames'>Order at Resturant</p>
             </div>
             <div id='menu-section' className='column col-sm-3 align-items-center col-lg-3'>
             <div className='img-section'>
             <img src={image26} className='img-fluid' alt='...'/>
             </div>
             <p className='iconNames'>Our Menu</p>
             </div>
             <div id='menu-section' className='column col-sm-3 align-items-center col-lg-3'>
             <div className='img-section'>
             <img src={image21} className='img-fluid' alt='...'/>
             </div>
             <p className='iconNames'> Tasty Snacks</p>
             </div>
     </div>
     <div className='text-center pt-5'>
     <button className='btn btn-warning'>Subscribe Now</button>
     </div>
     </div>
    </>
  )
}