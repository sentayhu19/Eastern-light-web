import React from "react";
import GoogleMapReact from "google-map-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./map.css";
const Map = ({ location, zoomLevel }) => {
  const LocationPin = ({ text }) => (
    <div className="flex items-center md:w-[180px] text-red-500 sm:[15vw] ">
      <FontAwesomeIcon
        icon={faLocationDot}
        className="md:text-5xl text-red-500 sm:text-2xl"
      />
      <p className="text-[1.3em] text-black">{text}</p>
    </div>
  );
  return (
    <div className="w-full">
      <div className="md:w-full md:h-[24vh] sm:h-72">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
