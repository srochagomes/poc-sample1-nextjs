import IconSVG from '@/components/icons/icon-svg';
import { useState } from 'react';

interface Props{
    images: string[]
}
const SimpleCarousel = (props:Props) => {
  const { images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>Anterior</button>

      <IconSVG path={images[currentIndex]} width={150} height={150} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={nextSlide}>Próximo</button>
    </div>
  );
};

export default SimpleCarousel;
