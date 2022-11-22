import React from 'react';
import { MapContainer, TileLayer, } from 'react-leaflet'
import './Map.css';

function Map() {
  return (
    <MapContainer center={[36.169941, -115.139832]} zoom={15} scrollWheelZoom={true}>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default Map;
