import React from "react";
import { Route } from "react-router";
import Header from "./Header";
import Home from "./NavPages/Home";
import Ammunition from "./NavPages/Ammunition";
import Maps from './NavPages/Maps'
import Bosses from './NavPages/Bosses'
import AmmoDetails from "./DetailPages/AmmoDetails";

function App() {
  return (
    <div className='page-container'>
      {/* Header with main links */}
      <Route path='/' component={ Header } />

      {/* Home page with main links, same as header but with more details */}
      <Route path='/' exact={ true } component={ Home } />

      {/* Ammunition page with list of ammo types linking to details on specific rounds */}
      <Route path='/Ammunition' exact={ true } component={ Ammunition } />

      {/* Maps page with list of maps linking to enlarged map */}
      <Route path='/Maps' exact={ true } component={ Maps } />

      {/* Bosses page with list of bosses linking to details on specific boss */}
      <Route path='/Bosses' exact={ true } component={ Bosses } />

      {/* Ammo detail page with details of ammo */}
      <Route path='/Ammunition/:specificAmmo' component={ AmmoDetails } />
    </div>
  );
}

export default App;
