import React, { useEffect, useState } from 'react';
import Loader from './Loader';

function Image(props) {
  useEffect(() => {
    setImageLoaded(false);
  }, [props.index]);

  const [imageLoaded, setImageLoaded] = useState(false);

  const onImageLoaded = () => {
    setImageLoaded(true);
  };

  return (
    <div className={'cem-media-image-container ' + props.className}>
      {!imageLoaded && <Loader />}
      <img
        src={props.source}
        alt={props.altText}
        data-index={props.index}
        onLoad={onImageLoaded}
        className={!imageLoaded ? 'loading' : ''}
      />
    </div>
  );
}

export default Image;
