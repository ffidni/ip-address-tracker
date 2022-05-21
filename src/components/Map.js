import {React, useState} from 'react'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet';

function createIcon(url) {
    return new L.icon({
        iconUrl: url
    });
}


export default function Map({location}) {

  return (
<MapContainer center={location} zoomControl={false} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={location} icon={createIcon("/images/icon-location.svg")}>
  </Marker>
</MapContainer>
  )
}
