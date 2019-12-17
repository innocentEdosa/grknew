import React from 'react';
import './service.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionHeader from '../Commons/SectionHeader';

const Service = () => {
  return (   <section class="service section py-5">
  <div class="container">
<SectionHeader sectionHeader="SERVICES" sectionLead={`This is the place where ruky would tell me what he wants. It would be better if he creates his own content`}/>

    <div class="d-flex row align-items-stretch mb-5">

      <div class="service-card col-lg-3 col-md-6 col-12 mb-4 py-1">
        <div class="media d-block media-feature text-center">
        <span className="service-icon pb-3"><FontAwesomeIcon icon="car" size="3x" /></span>
          <div class="media-body">
            <h3 class="mt-0 sub-heading text-black">Car Tracking</h3>
            <p className="text-dull">We use quality trackers for our tracking system which has lower chance of failure  and longer service time on this account we offer a one year warranty.</p>
            <p><a href="#" class="btn primary-btn btn-sm">Learn More</a></p>
          </div>
        </div>
      </div>

      <div class="service-card col-lg-3 col-md-6 col-12 mb-4 py-1">
        <div class="media d-block media-feature text-center">
        <span className="service-icon pb-3"><FontAwesomeIcon icon="camera-retro" size="3x" /></span>
          <div class="media-body">
            <h3 class="mt-0 sub-heading text-black">CCTV</h3>
            <p className="text-dull">We buy and install CCTV camera systems for both homes offices hotels etc. We specialize in HD and IP camera systems installation with remote view options.</p>
            <p><a href="#" class="btn primary-btn btn-sm">Learn More</a></p>
          </div>
        </div>
      </div>

      <div class="service-card col-lg-3 col-md-6 col-12 mb-4 py-1">
        <div class="media d-block media-feature text-center">
        <span className="service-icon pb-3"><FontAwesomeIcon icon="solar-panel" size="3x" /></span>
          <div class="media-body">
            <h3 class="mt-0 sub-heading text-black">Solar Inverters</h3>
            <p className="text-dull">We buy and install solar pannels inverters, charge controller and batteries to ensure u have constant power for your homes and businesses.  </p>
            <p><a href="#" class="btn primary-btn btn-sm">Learn More</a></p>
          </div>
        </div>
      </div>
      
      <div class="service-card col-lg-3 col-md-6 col-12 mb-4 py-1">
        <div class="media d-block media-feature text-center">
        <span className="service-icon pb-3"><FontAwesomeIcon icon="bolt" size="3x" /></span>
          <div class="media-body">
            <h3 class="mt-0 sub-heading text-black">Electric fence</h3>
            <p className="text-dull">We buy and install electric perimeter fence with incorporated alarm systems to detect intruders. We use quality equipment to ensure longitivity and service life.</p>
            <p><a href="#" class="btn primary-btn btn-sm">Learn More</a></p>
          </div>
        </div>
      </div>
      
    </div>
    {/* <!-- END row --> */}
    <div class="row justify-content-center element-animate"> 
      <div class="col-md-4"><p><a href="services.html" class="btn primary-btn-2 btn-block">View All Services</a></p></div>
    </div>
  </div>
</section>);
}
 
export default Service;
