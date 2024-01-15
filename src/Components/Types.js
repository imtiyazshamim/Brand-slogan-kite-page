import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/Types.css';
import kite1 from '../assets/img/icon-1.jpg';
import kite2 from '../assets/img/icon-2.jpg';
import kite3 from '../assets/img/icon-3.jpg';
import kite4 from '../assets/img/icon-4.jpg';
function Types() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='types-section container'>
        <div className='heading-h2 ' >
            <h2 className='underline underline-offset-8 decoration-black animate-pulse opacity-70'>Types of Kites</h2>
        </div>
        <div className='kite-type'>
            <div className='row'>
                <div className='col-md-3' >
                    <div className='thumbnail ' data-aos-once='true' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration='3000'>
                            <img src={kite1} alt="Kite" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ' />
                    </div>
                    <div className='kite-info '>
                    <h4> Diamond Kites</h4>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='thumbnail' data-aos="fade-up" data-aos-anchor-placement="center-bottom"  data-aos-once='true' data-aos-duration='3000'>
                            <img src={kite2} alt="Kite" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' />
                    </div>
                    <div className='kite-info'>
                    <h4> Diamond Kites</h4>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='thumbnail' data-aos="fade-up" data-aos-anchor-placement="center-bottom"  data-aos-once='true' data-aos-duration='3000'>
                            <img src={kite3} alt="Kite" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' />
                    </div>
                    <div className='kite-info'>
                    <h4> Diamond Kites</h4>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='thumbnail' data-aos="fade-up" data-aos-anchor-placement="center-bottom"  data-aos-once='true' data-aos-duration='3000'>
                            <img src={kite4} alt="Kite" className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' />
                    </div>
                    <div className='kite-info'>
                    <h4> Diamond Kites</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Types