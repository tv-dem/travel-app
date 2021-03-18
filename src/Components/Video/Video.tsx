import React from 'react';
import 'video-react/dist/video-react.css';
import './Video.scss';
import Iframe from 'react-iframe';

const Video: React.FC<{ url: string }> = ({url})  => (
  <div style={{ height: '50vw', width: '100%' }}>
    <Iframe url={url}
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
  </div>
);

export default Video;
