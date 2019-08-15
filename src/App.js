import React from "react";
import Map from './components/Map'
import SwipeableTemporaryDrawer from './components/SideBar';

export default function App() {

  return (
    <div>
      <SwipeableTemporaryDrawer />
      <Map />
    </div>
  );
}
