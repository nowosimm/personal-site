import { Carousel } from "@mantine/carousel";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Image } from "@mantine/core";
import MantineWrapper from "./MantineWrapper";
import filler from "../images/filler_image.png";

import one from "../images/carouselImages/one.png";
import two from "../images/carouselImages/two.png";
import three from "../images/carouselImages/three.png";
import four from "../images/carouselImages/four.png";
import five from "../images/carouselImages/five.png";
import six from "../images/carouselImages/six.png";
import seven from "../images/carouselImages/seven.png";
import eight from "../images/carouselImages/eight.png";
import nine from "../images/carouselImages/nine.png";
import ten from "../images/carouselImages/ten.png";
import eleven from "../images/carouselImages/eleven.png";
import twelve from "../images/carouselImages/twelve.png";
import thirteen from "../images/carouselImages/thirteen.png";
import fourteen from "../images/carouselImages/fourteen.png";
import fifteen from "../images/carouselImages/fifteen.png";
import sixteen from "../images/carouselImages/sixteen.png";
import seventeen from "../images/carouselImages/seventeen.png";
import eighteen from "../images/carouselImages/eighteen.png";
import nineteen from "../images/carouselImages/nineteen.png";
import twenty from "../images/carouselImages/twenty.png";
import twentyone from "../images/carouselImages/twentyone.png";
import twentytwo from "../images/carouselImages/twentytwo.png";

export default function CarouselLoopComponent() {
  return (
    <MantineWrapper>
      <Carousel
        withIndicators
        slideSize="50%"
        emblaOptions={{ loop: true, align: "start", slidesToScroll: 2 }}>
        <Carousel.Slide>
          <Image src={one.src} alt="Slide 1" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={two.src} alt="Slide 2" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={three.src} alt="Slide 3" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={four.src} alt="Slide 4" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={five.src} alt="Slide 5" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={six.src} alt="Slide 6" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={seven.src} alt="Slide 7" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={eight.src} alt="Slide 8" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={nine.src} alt="Slide 9" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={ten.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={eleven.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={twelve.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={thirteen.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={fourteen.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={fifteen.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={sixteen.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={seventeen.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={eighteen.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={nineteen.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={twenty.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={twentyone.src} alt="Slide 10" />
        </Carousel.Slide>
        <Carousel.Slide>
          <Image src={twentytwo.src} alt="Slide 10" />
        </Carousel.Slide>
      </Carousel>
    </MantineWrapper>
  );
}
