import React, { useState } from 'react';
import style from './SimpleCarousel.module.scss';
import IconClick from '@/components/button/icon-click';
import { FieldIconPath } from '@/types/enums/FieldIconPath';
import IconSVG from '@/components/icons/icon-svg';

interface Props {
  images: string[];
  minImagesToShow?: number;
}

const SimpleCarousel = (props: Props) => {
  const { images, minImagesToShow = 1 } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<string | null>(null);

  const nextSlide = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTransitionEnd = () => {
    setDirection(null);
  };

  return (
    <div className={style['simpleCarousel']}>
      <IconClick path={FieldIconPath.fowardback} onClick={prevSlide} />
      <div className={style['simpleCarousel-images-container']}>
        <div className={`${style['simpleCarousel-images']} ${style[`simpleCarousel-${direction}`]}`} style={{ transform: `translateX(${currentIndex * 10}%)` }} onTransitionEnd={handleTransitionEnd}>
          {images.slice(0, minImagesToShow).map((image, index) => (
            <IconSVG key={index} priority={true} path={image} width={250} height={250} alt={`Slide ${currentIndex + 1}`} />
          ))}
        </div>
      </div>
      <IconClick path={FieldIconPath.fowardto} onClick={nextSlide} />
    </div>
  );
};

export default SimpleCarousel;
