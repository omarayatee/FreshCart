"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider({
  spaceBetween = 0,
  slidesPerView = 1,
  listOfImages,
  heightClass,
}: {
  spaceBetween?: number;
  slidesPerView?: number;
  listOfImages: string[];
  heightClass: string;
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination]} 
      className={`${heightClass} my-5`}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true, renderBullet(index, className){
        return `<span class="${className} w-4! h-4! bg-white!"></span>`;
      },
     }}
      navigation
    >
      {listOfImages.map((src) => (
        <SwiperSlide className="bg-green-500" key={src}>
          <img src={src} alt={src} className="object-cover w-full h-full " />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}


