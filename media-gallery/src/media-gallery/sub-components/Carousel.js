import React from 'react';
import Image from './Image';

function Carousel(props) {
  // useEffect(() => {
  //   console.log('carousel image loading');
  //   setCarouselActiveImageLoaded(false);
  // }, [props.imageIndex]);

  // const onActiveImageLoaded = () => {
  //   setCarouselActiveImageLoaded(true);
  // };

  // const [carouselActiveImageLoaded, setCarouselActiveImageLoaded] = useState(
  //   true
  // );

  return (
    <div className="cem-media-gallery__carousel">
      <h1>Carousel</h1>
      <button onClick={() => props.changeSlideCallBack('previous')}>
        Previous
      </button>
      <button onClick={() => props.changeSlideCallBack('next')}>Next</button>
      <p>Current Index: {props.imageIndex.currentIndex}</p>

      <Image
        className="cem-media-gallery__image prevImage"
        source={props.prevImage.path}
        index={props.prevImage.index.toString()}
      />
      <Image
        className="cem-media-gallery__image currentImage"
        source={props.currentImage.path}
        index={props.currentImage.index.toString()}
      />
      <Image
        className="cem-media-gallery__image nextImage"
        source={props.nextImage.path}
        index={props.nextImage.index.toString()}
      />
    </div>
  );
}

export default Carousel;
