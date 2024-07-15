import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const images = [
    "https://img.freepik.com/free-vector/modern-sale-banner-template-with-fluid-shapes_1361-1389.jpg?t=st=1720970278~exp=1720973878~hmac=ba53fc15d1495e011e420ae39dec8afb8d546dc927fd6082765751779265d99d&w=996",
    "https://img.freepik.com/free-vector/realistic-basketball-sale-background_23-2149344820.jpg?t=st=1720970970~exp=1720974570~hmac=8a281369efc1b5fb3d3c45ef92a9790be2dc2447a20c529ba997bc6cd7cbbbfd&w=996",
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-h-fit"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((imageLink, index) => (
          <CarouselItem key={index + 9999}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <span className="text-4xl aspect-square font-semibold">
                    <img src={imageLink} alt="" />
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Banner;
