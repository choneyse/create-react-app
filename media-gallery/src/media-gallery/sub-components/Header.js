import React from 'react';

function Header(props) {
  return (
    <div className="cem-media-gallery_header">
      <h1>Header</h1>
      <button onClick={() => props.changeViewCallBack('carousel')}>
        Switch to Carousel
      </button>
      <button onClick={() => props.changeViewCallBack('thumbnails')}>
        Switch to Thumbnails
      </button>
      <button onClick={() => props.changeViewCallBack('close')}>Close</button>
    </div>
  );
}

export default Header;
