import React from 'react';import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Banner.css';
import Slider from '../assets/img/banner.jpg';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner-img img-fluid'>
      <img src={Slider} alt="Description" className='' /> 
        </div>
    </div>
  )
}

export default Banner