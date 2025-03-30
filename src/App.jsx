import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./App.css";

import imagem1 from "./img/1.jpg";
import imagem2 from "./img/2.jpg";
import imagem3 from "./img/3.jpg";
import imagem4 from "./img/4.jpg";
import imagem5 from "./img/5.jpg";

const App = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src={imagem1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem4} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagem5} alt="Slide 5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default App;
