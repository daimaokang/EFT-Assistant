import React from "react";
import { Route } from "react-router";
import Header from "./Header";
import Home from "./NavPages/Home";
import Ammunition from "./NavPages/Ammunition";
import Maps from './NavPages/Maps'
import Bosses from './NavPages/Bosses'

function App() {
  return (
    <div className='page-container'>
      <Route path='/' component={ Header } />
      <Route path='/' exact={ true } component={ Home } />
      <Route path='/Ammunition' exact={ true } component={ Ammunition } />
      <Route path='/Maps' exact={ true } component={ Maps } />
      <Route path='/Bosses' exact={ true } component={ Bosses } />
    </div>
  );
}

export default App;
