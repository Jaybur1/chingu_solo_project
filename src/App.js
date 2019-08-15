import React from "react";
import Map from './components/Map'
import SwipeableTemporaryDrawer from './components/SideBar';
//import * as parkDate from "./data/sledding-hills-ottawa.json";

export default function App() {



  return (
    <div>
      <SwipeableTemporaryDrawer />
      <Map />
    </div>
  );
}
