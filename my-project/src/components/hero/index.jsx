import  { useState } from "react";
import carousel1 from "../../assets/images/carousel1.jpg";
import carousel2 from "../../assets/images/carousel2.jpg";
import carousel3 from "../../assets/images/carousel3.jpg";
import carousel4 from "../../assets/images/carousel4.jpg";
import carousel5 from "../../assets/images/carousel5.jpg";

const Hero = () => {
  const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="w-full h-[30rem] overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full transition-opacity duration-700 bg-cover ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-10 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentImageIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 w-10 h-10 left-5 transform -translate-y-1/2 z-10 p-2 bg-white opacity-50 hover:opacity-75 rounded-full"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 w-10 h-10 right-5 transform -translate-y-1/2 z-10 p-2 bg-white opacity-50 hover:opacity-75 rounded-full"
        aria-label="Next Slide"
      >
        &gt;
      </button>
    </div>
  );
};

export default Hero;
// {navLinks.map((navItem) => {
//     <Link
//       to={navItem.url}
//       className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
//     >
//       {navItem.title}
//     </Link>
//   })}