import React from 'react';
import './aboutus.scss';
import Aboutus from '../../assets/img/bg-1.jpeg';
import SectionHeader from '../Commons/SectionHeader';

const AboutUs = () => {
  return ( <>    <section class="aboutus row section-padding">
  <div class="container">
  <SectionHeader sectionHeader="About us" sectionLead={`just say some fancy stuff about your company here`}/>

<div className="container">

      <div class="row">
        <div class="col-lg-7 col-md-6 col-sm-12 aboutus-content">
              <div class="sub-heading pb-3">
                  <h2 className="aboutus-sub">WHO WE ARE</h2>
              </div>
              <p className="text-dull lead pb-3">Give a very enticing speech about yourself here and then do all the many things that would make people want to contact you. Just sugar coat your business like you putting icing on cake</p>
              <a href="#" className="btn primary-btn-2 aboutus-btn">Contact Us Now</a>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-12 aboutus-pic-wrapper">
              {/* <img src={Aboutus} alt="something"/> */}
          </div>
        </div>
  </div>
  </div>
</section>
</> );
}
 
export default AboutUs;