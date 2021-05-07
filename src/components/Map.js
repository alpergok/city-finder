import React from "react"
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";


const mapContainerStyle = {
  height: "75vh",
  width: "75vw",
};

const center = {
  lat: 39.92077,
  lng: 32.85411,
};

export default function Map(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBISspa9Lk8lSiHiC3c6GMeVkX2QQJupoQ",
  });


  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={6}
        center={center}
      >
        {props.nearestCitiesProp.map(city => <Marker
          key={city.city + city.county}
          position={{ lat: city.lat, lng: city.lng }}
        />)}
        )
      </GoogleMap>
    </div>
  );
}