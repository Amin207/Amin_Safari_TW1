import React, { useEffect, useState } from "react";

import useStore from "../useStore";

import _ from "lodash";
import GoogleMapReact from "google-map-react";

import pointer from "../Resource/Images/maps-and-flags.png";

const Marker = ({ img }) => <img src={img} />;

export default function Map() {
  const selectedCountry = useStore((s) => s.selectedCountry);


  const [location, setLocation] = useState({});

  useEffect(() => {
    if (
      !_.isEmpty(selectedCountry) &&
      !_.isUndefined(selectedCountry.lat) &&
      !_.isUndefined(selectedCountry.lon)
    ) {
      setLocation({ lat: selectedCountry.lat, lng: selectedCountry.lon });
    } else {
      setLocation({ lat: 50, lng: 50 });
    }
  }, [selectedCountry]);


  const mapOptions = {
    center: location,
    zoom: 5,
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        center={mapOptions.center}
        zoom={mapOptions.zoom}
      >
        <Marker lat={location.lat} lng={location.lng} img={pointer} />
      </GoogleMapReact>
    </div>
  );
}
