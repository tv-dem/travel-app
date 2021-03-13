import React, { useEffect } from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"
import './Video.scss'

const Video:React.FC = () => {
  useEffect(()=>{
    fetch("https://api-travel-app.herokuapp.com/country")
      .then(res=>res.json())
      .then(data=>console.log(data));
  })
  return (
    <div className='video-container'>
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </div>
  );
}

export default Video;
