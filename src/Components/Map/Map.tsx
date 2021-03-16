// @ts-nocheck
import React, { useEffect, useState } from 'react';
import './Map.scss';
import 'react-leaflet-fullscreen/dist/styles.css';
import { Marker, TileLayer, GeoJSON, MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import MapFull from './fullScreenMap';
import mapData from './c.json';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

// type MapProps = {
//   coordinates: Array<number>,
// }

const Map = ({coordinates, iso}:any) => {
  const [data, setData] = useState({});
  const [isFullscreen, setFullScreen] = useState(false);
  useEffect(()=>{
    setData(mapData.features.find(({ id }) => id === iso));
  }, [iso])
  return (
    <>
      <div className='map-container-wrapper'>
        <FullscreenIcon style={{color: '#fff'}} fontSize='large' className='full-screen' type='button' onClick={() => setFullScreen(!isFullscreen)}/>
        <MapContainer className='map-container' center={coordinates} zoom={6}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
            fullscreenControl='true'
          />
          <Marker position={coordinates} />
          <GeoJSON data={data} />
        </MapContainer>
      </div>
      {isFullscreen && <MapFull data={data}
                                onCloseMap={() => setFullScreen(false)}
                                position={coordinates}
      />}
    </>
  );
};


export default Map;
