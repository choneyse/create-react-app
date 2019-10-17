import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MediaGallery from './media-gallery/MediaGallery';
import * as serviceWorker from './serviceWorker';

const content = JSON.parse(document.querySelector('#root').dataset.content);
const defaultImage = content.defaultImage;
const defaultImageIndex = content.defaultImageIndex;
const images = content.imageLinks;

ReactDOM.render(
  <MediaGallery
    deafaultImage={defaultImage}
    defaultImageIndex={defaultImageIndex}
    images={images}
  />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
