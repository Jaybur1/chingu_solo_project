import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
//import * as parkDate from "./data/sledding-hills-ottawa.json";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  


  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/mapbox/dark-v10'
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      </ReactMapGL>
    </div>
  );
}
