import React, { Fragment } from 'react';
import Showcase from '../Showcase/Showcase';
import Service from '../Service/Service';
import AboutUs from '../AboutUs/AboutUs';
import RecentWork from '../RecentWork/Recentwork';

const Home = () => {
  return ( <Fragment> 
    <Showcase/>
    <Service/>
    <AboutUs/>
    <RecentWork/>
    </Fragment> );
}
 
export default Home;