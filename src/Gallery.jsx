import { useState } from "react";
import DesktopLightbox from "./DesktopLightbox.jsx";

// Importing the product images and thumbnails dynamically
const productImages = import.meta.glob(
  "./src/assets/image-product-[0-9].{jpg,jpeg,png,svg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const thumbnails = import.meta.glob(
  "./src/assets/*thumbnail*.{jpg,jpeg,png,svg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export default function ProductGallery() {
  const prodImages = Object.values(productImages);
  const thumbs = Object.values(thumbnails);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lb, setLb] = useState(false);
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % prodImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prodImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full mt-0 row-span-2 lg:w-[400px] mx-auto lg:h-[400px]">
      <div className="relative h-90 overflow-hidden rounded-sm lg:w-[400px] lg:h-[400px] mx-auto">
        <div className="carousel-item duration-700 ease-in-out ">
          <img
            onClick={() => {
              if (window.innerWidth >= 1024) {
                setLb(true);
              }
            }}
            src={prodImages[currentIndex]}
            className="absolute block w-full  object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 cursor-pointer"
            alt={`product-${currentIndex}`}
          />
        </div>
      </div>
      <div className="hidden lg:flex flex-row justify-between mt-4">
        {thumbs.map((img, i) => (
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

      <DesktopLightbox
        lb={lb}
        setLb={setLb}
        prodImages={prodImages}
        thumbs={thumbs}
      />
    </div>
  );
}
