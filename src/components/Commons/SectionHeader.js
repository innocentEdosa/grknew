import React from 'react';

const SectionHeader = ({sectionHeader, sectionLead}) => {
  return ( 
    <div class="row justify-content-center mb-5">
      <div class="col-md-8 text-center">
  <h2 class="text-uppercase heading border-btm mb-4">{sectionHeader}</h2>
  <p class="mb-3 lead">{sectionLead}</p>
      </div>
    </div> );
}
 
export default SectionHeader;