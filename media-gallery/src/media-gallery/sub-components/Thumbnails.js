import React from 'react';
// import Image from './Image';

function Thumbnails(props) {
  return (
    <div className="cem-media-gallery__thumbnails__wrapper">
      <h1>Thumbnails</h1>
      {/* <Image className='cem-media-gallery__image prevImage' src= /> */}
      {/* {props.images.map(image => (
        <Image
          key={image.index}
          index={image.index}
          className="thumbnail"
          source={image.thumbnail}
          altText="Alt Text"
        />
      ))} */}
    </div>
  );
}

export default Thumbnails;
