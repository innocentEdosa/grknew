import React, { useState } from 'react';
import TopNav from '../components/TopNav/TopNav';

const TopNavContainer = () => {

  const [navMetaData, setNavMetaData] = useState({
    showMobileNav: false
  })
  const toggleMobileNav = () => {
    setNavMetaData((prevNavMetaData) =>({
      ...prevNavMetaData,
      showMobileNav: !prevNavMetaData.showMobileNav,
    })) 
  }
  return ( <TopNav showMobileNav={navMetaData.showMobileNav} toggleMobileNav={toggleMobileNav} /> );
}
 
export default TopNavContainer;