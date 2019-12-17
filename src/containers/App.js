import React,{ Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopNavContainer from './TopNavContainer';
import HomeContainer from './Home';
import './App.css';


function App() {
  return (
    <Fragment>
    <TopNavContainer />
    <Switch>
    <Route exact path="/" component={HomeContainer} />
  </Switch>
  </Fragment>
  );
}

export default App;
