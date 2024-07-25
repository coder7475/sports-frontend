import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  const images = [
    "https://img.freepik.com/free-vector/modern-sale-banner-template-with-fluid-shapes_1361-1389.jpg?t=st=1720970278~exp=1720973878~hmac=ba53fc15d1495e011e420ae39dec8afb8d546dc927fd6082765751779265d99d&w=996",
    "https://img.freepik.com/free-vector/realistic-basketball-sale-background_23-2149344820.jpg?t=st=1720970970~exp=1720974570~hmac=8a281369efc1b5fb3d3c45ef92a9790be2dc2447a20c529ba997bc6cd7cbbbfd&w=996",
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full rounded-lg"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="rounded-lg">
        {images.map((imageLink, index) => (
          <CarouselItem key={index + 9999}>
            <img
              src={imageLink}
              alt=""
              className="w-full h-screen rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
