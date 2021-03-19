// @ts-nocheck
import React from 'react';
import './Map.scss';
import 'react-leaflet-fullscreen/dist/styles.css'
import { Marker, TileLayer, GeoJSON, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L  from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const MapFull = ({ onCloseMap, data, position }) => (
  <>
    <MapContainer className='map-container_full' center={position} zoom={6} >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        fullscreenControl = 'true'
      />
      <Marker position={position} />
      <GeoJSON data={data} />
      <FullscreenExitIcon style={{color: '#fff'}} fontSize='large' className='full-map-btn-close' type='button' onClick={onCloseMap}/>
    </MapContainer>
    </>
)


export default MapFull;
