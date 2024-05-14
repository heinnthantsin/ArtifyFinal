import { Carousel } from "@material-tailwind/react";
import Button from "../util/Button";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function CarouselCustomNavigation() {
  const navigate = useNavigate();
  const slides = [
    {
      imageUrl: "src/assets/img/bg-home/hero-bg-1.jpg",
      buttonContent: "Explore Arts",
      to: "/product",
    },
    {
      imageUrl: "src/assets/img/bg-home/hero-bg-2.jpg",
      buttonContent: "Explore Artists",
      to: "/artist",
    },
    {
      imageUrl: "src/assets/img/bg-home/hero-bg-3.jpg",
      buttonContent: "Upcoming Events",
      to: "/event",
    },
  ];

  return (
    <Carousel
      autoplay={true}
      loop={true}
      autoplayDelay={4000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-2 md:bottom-4 right-0 z-20 flex -translate-x-2/4 gap-2">
          {slides.map((slide, index) => (
            <span
              key={index}
              className={`block h-1 cursor-pointer rounded-2xl transition-all duration-150 ${
                activeIndex === index
                  ? "md:w-8 bg-white w-2"
                  : "md:w-4 bg-white/50 w-1"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      )}
    >
      {slides.map((slide, index) => (
        <div key={index} className="relative h-auto overflow-y-hidden">
          <img
            src={slide.imageUrl}
            alt={`image ${index + 1}`}
            className="lg:h-[80vh] md:h-[75vh] sm:h-[50vh] h-[40vh] w-full object-cover"
          />
          <div onClick={() => navigate(slide.to)}>
            <Button
              customeClass="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 md:px-4 md:py-2 lg:px-6 lg:py-3 p-1 text-xs"
              buttonName={slide.buttonContent}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
