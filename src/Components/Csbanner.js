import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Banner.css';

function Csbanner() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='banner-css ' data-aos="fade-in" data-aos-anchor-placement="center-bottom"  data-aos-once='true' data-aos-duration='3000'>

    </div>
  )
}

export default Csbanner