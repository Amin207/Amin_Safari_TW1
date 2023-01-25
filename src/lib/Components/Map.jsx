import React from "react";

import GoogleMapReact from "google-map-react";

import useStore from "../useStore";
import _ from "lodash";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map() {
  const selectedCountry = useStore((s) => s.selectedCountry);

  const handleCoord = (type) => {
    if (
      !_.isEmpty(selectedCountry) &&
      !_.isUndefined(selectedCountry.lat) &&
      !_.isUndefined(selectedCountry.lon)
    ) {
      console.log(selectedCountry);
      if (type === "lat") return selectedCountry.lat;
      if (type === "lon") return selectedCountry.lon;
    } else {
      return 0;
    }
  };

  const defaultProps = {
    center: {
      lat: handleCoord("lat"),
      lng: handleCoord("lon"),
    },
    zoom: 11,
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={handleCoord("lat")}
          lng={handleCoord("lon")}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
