import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/css/About.css';
import Aboutimg from '../assets/img/image.jpg';

function About() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='about pt-20 pb-10' >
        <div className='container'>
            <div className='row' data-aos='fade-up' data-aos-duration='2000'  data-aos-once='true'>
                <div className='col-md-4 order-2 order-lg-1 about-image' >
                <img src={Aboutimg} alt="Description" className='' />
                </div>
                <div className='col-md-8 order-1 order-lg-2 about-details ' >
                    <p className="animate-typing">The Kite Festival, a vibrant celebration that takes to the skies, is a joyous event where colorful kites dance amidst the backdrop of a clear, sunny day. Families and friends gather on open grounds, their kites soaring high above in a display of creativity and skill. The festival is a kaleidoscope of hues, as intricately designed kites of various shapes and sizes paint the sky with brilliant patterns.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About