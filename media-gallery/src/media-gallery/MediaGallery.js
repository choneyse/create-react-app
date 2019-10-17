import React, { useEffect, useState } from 'react';
import '../App.css';
import Header from './sub-components/Header';
import Carousel from './sub-components/Carousel';
import Thumbnails from './sub-components/Thumbnails';

function MediaGallery(props) {
  const IMAGE_COUNT = props.images.length - 1;

  useEffect(() => {}, []);

  const [imageIndex, setCarouselIndex] = useState({
    currentIndex: 1,
    prevIndex: props.images.length - 1,
    nextIndex: 2,
  });
  const [currentView, setCurrentView] = useState('carousel');

  const updateIndex = direction => {
    let newIndex = imageIndex.currentIndex;
    switch (direction) {
      case 'next':
        newIndex = newIndex + 1 > IMAGE_COUNT ? 1 : newIndex + 1;
        break;
      case 'previous':
        newIndex = newIndex - 1 < 1 ? IMAGE_COUNT : newIndex - 1;
        break;
      default:
        break;
    }
    const prevIndex = newIndex - 1 <= 0 ? IMAGE_COUNT : newIndex - 1;
    const nextIndex = newIndex + 1 >= IMAGE_COUNT ? 1 : newIndex + 1;
    setCarouselIndex({ currentIndex: newIndex, prevIndex, nextIndex });
  };

  const changeView = newView => {
    setCurrentView(newView);
  };

  return (
    <div className="cem-media-gallery">
      <Header changeViewCallBack={changeView} />
      {currentView === 'carousel' && (
        <Carousel
          imageIndex={imageIndex}
          changeSlideCallBack={updateIndex}
          prevImage={props.images.find(obj => {
            return obj.index === imageIndex.prevIndex;
          })}
          currentImage={props.images.find(obj => {
            return obj.index === imageIndex.currentIndex;
          })}
          nextImage={props.images.find(obj => {
            return obj.index === imageIndex.nextIndex;
          })}
        />
      )}
      {currentView === 'thumbnails' && (
        <Thumbnails
          currentIndex={imageIndex}
          changeSlideCallBack={updateIndex}
          images={props.images}
        />
      )}
    </div>
  );
}

export default MediaGallery;
