import React from 'react';
import './recentwork.scss';
import SectionHeader from '../Commons/SectionHeader';

const RecentWork = () => {
  return (  <section class="section border-t section-padding">
  <div class="container">
  <SectionHeader sectionHeader="Recent works" sectionLead={`some headlines about the work thou art done`}/>

 
    <div class="row no-gutters">
      <div class="col-md-2 element-animate">
        <a href="works-single.html" class="link-thumbnail">
          <h3>car tracking</h3>
          <span class="ion-plus icon"></span>
          <img src="img/work_thumb_1.jpg" alt="Image placeholder" class="img-fluid"/>
        </a>
      </div>
      <div class="col-md-2 element-animate">
        <a href="works-single.html" class="link-thumbnail">
          <h3>Electric fence</h3>
          <span class="ion-plus icon"></span>
          <img src="img/work_thumb_2.jpg" alt="Image placeholder" class="img-fluid"/>
        </a>
      </div>
      <div class="col-md-2 element-animate">
        <a href="works-single.html" class="link-thumbnail">
          <h3>cctv</h3>
          <span class="ion-plus icon"></span>
          <img src="img/work_thumb_3.jpg" alt="Image placeholder" class="img-fluid"/>
        </a>
      </div>
      <div class="col-md-2 element-animate">
        <a href="works-single.html" class="link-thumbnail">
          <h3>Automated gates</h3>
          <span class="ion-plus icon"></span>
          <img src="img/work_thumb_3.jpg" alt="Image placeholder" class="img-fluid"/>
        </a>
      </div>
      <div class="col-md-2 element-animate">
        <a href="works-single.html" class="link-thumbnail">
          <h3>Security</h3>
          <span class="ion-plus icon"></span>
          <img src="img/work_thumb_3.jpg" alt="Image placeholder" class="img-fluid"/>
        </a>
      </div>
      <div class="col-md-2 element-animate">
        <a href="works-single.html" class="link-thumbnail">
          <h3>Inverter</h3>
          <span class="ion-plus icon"></span>
          <img src="img/work_thumb_3.jpg" alt="Image placeholder" class="img-fluid"/>
        </a>
      </div>
 
    </div>
  </div>
 </section>);
}
 
export default RecentWork;