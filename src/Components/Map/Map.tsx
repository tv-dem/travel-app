// @ts-nocheck
import React, { useState } from 'react';
import './Map.scss';
import 'react-leaflet-fullscreen/dist/styles.css';
import { Marker, TileLayer, GeoJSON, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import MapFull from './fullScreenMap';
import mapData from './countries.json';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const Map = () => {
  const [isFullscreen, setFullScreen] = useState(false);
  const data = mapData.features.find(({ properties }) => properties.ISO_A3 === 'BLR');
  const position = [53.916667, 27.55];
  return (
    <>
      <div className='map-container-wrapper'>
        <FullscreenIcon style={{color: '#fff'}} fontSize='large' className='full-screen' type='button' onClick={() => setFullScreen(!isFullscreen)}/>
        <MapContainer className='map-container' center={position} zoom={6}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            fullscreenControl='true'
          />
          <Marker position={position} />
          <GeoJSON data={mapData.features.find(({ properties }) => properties.ISO_A3 === 'BLR')} />
        </MapContainer>
      </div>
      {isFullscreen && <MapFull data={data}
                                onCloseMap={() => setFullScreen(false)}
                                position={position}
      />}
    </>
  );
};


export default Map;
