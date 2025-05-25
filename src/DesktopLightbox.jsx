
import { useState } from "react";
export default function DesktopLightbox(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.prodImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.prodImages.length - 1 : prevIndex - 1
    );
  };
  if (props.lb == true) {
    return (
        <div className="flex flex-row justify-between items-center">
      <div className="flex lg:block fixed inset-0 bg-black/50 z-10">
        <p onClick={() => props.setLb(false)} className="relative font-bold text-white text-4xl left-[calc(50%+200px)] top-10 cursor-pointer">x</p>
        <div className="relative h-90 overflow-hidden rounded-sm lg:w-[450px] lg:h-[400px] mx-auto mt-10">
            
          <div className="carousel-item duration-700 ease-in-out ">
            <img
              src={props.prodImages[currentIndex]}
              className="absolute block w-full  object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`product-${currentIndex}`}
            />
          </div>
        <div>
            <button
        type="button"
        className="absolute top-0 left-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevImage}
      >
        <span className="inline-flex bg-white items-center justify-center w-10 h-10 rounded-full group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <img src="./assets/icon-previous.svg" alt="prev" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextImage}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <img src="./assets/icon-next.svg" alt="next" />
          <span className="sr-only">Next</span>
        </span>
      </button>

        </div>
        </div>
        <div className="hidden lg:flex flex-row justify-between mt-4 w-[450px] mx-auto">
          {props.thumbs.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`rounded-lg p-1 transition-all duration-200 ${
                currentIndex === i
                  ? "border-2 border-orange-500"
                  : "border-2 border-transparent"
              }`}
            >
              <img
                src={img}
                alt={`thumb-${i}`}
                className="w-[80px] rounded-md cursor-pointer hover:opacity-50"
              />
            </button>
          ))}
        </div>
      </div>
      </div>
    );
  } else {
    return null;
  }
}
