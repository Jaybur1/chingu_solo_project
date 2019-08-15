import React, { useState, useEffect} from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as hillData from "../data/sledding-hills-ottawa.json";

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });

  const [selectedPoint, setSelectedPoint] = useState(null);

  useEffect(() => {
    const listener = (e) =>{
      if(e.key === "Escape"){
        setSelectedPoint(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        //mapStyle = 'mapbox://styles/jaybur1/cjzcs7aic2ga81co3kfsc23n6'
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {hillData.features.map(hill => (
          <Marker
            key={hill.properties.PARK_ID}
            latitude={hill.geometry.coordinates[1]}
            longitude={hill.geometry.coordinates[0]}
          >
            <div>
              <button
                className="marker-btn"
                onClick={e => {
                  e.preventDefault();
                  setSelectedPoint(hill);
                }}
              >
                <i
                  className="material-icons md-light"
                  style={{ color: "white" }}
                >
                  place
                </i>
              </button>
            </div>
          </Marker>
        ))}
        {selectedPoint && (
          <Popup
            longitude={selectedPoint.geometry.coordinates[0]}
            latitude={selectedPoint.geometry.coordinates[1]}
            onClose={()=>{
              setSelectedPoint(null)
            }}
          >
            <div>
              <h3>{selectedPoint.properties.NAME}</h3>
              <hr />
              <p>Address: {selectedPoint.properties.ADDRESS}</p>
              <br />
              {selectedPoint.properties.DESCRIPTIO && (
                <p>{selectedPoint.properties.DESCRIPTIO}</p>
              )}
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}

/*
 {selectedPoint ? (
          <Popup>
            <div
              latitude={selectedPoint.geometry.coordinates[1]}
              longitude={selectedPoint.geometry.coordinates[0]}
            >
              hill
            </div>
          </Popup>
        ) : null}
*/
