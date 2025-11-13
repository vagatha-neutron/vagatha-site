"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";

export default function Carrusel() {
  const images = [
    "/images/manos_usando_joyeria_vagatha.jpg",
    "/images/manos_modelando_anillos_vagatha.jpg",
    "/images/mostrando_cadena_y_joyeria_vagatha.jpg",
    "/images/guardando_en_el_bolsillo_joyeria_vagatha.jpg",
    "/images/modelo_viendose_en_el_espejo_joyeria_vagatha.jpg",
  ];

  const extended = [...images, ...images];

  return (
    <section className="w-full bg-beige">
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        slidesPerView="auto"
        spaceBetween={10}
        speed={6000}
        allowTouchMove={false}
        touchRatio={0}
        simulateTouch={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        className="flex w-full h-[485px]"
      >
        {extended.map((src, i) => (
          <SwiperSlide
            key={i}
            className="!w-auto flex-shrink-0 h-[485px] overflow-hidden"
          >
            <div className="relative h-[485px] w-[350px]">
              <Image
                src={src}
                alt={`Vágatha carrusel ${i + 1}`}
                fill
                priority={false}
                loading="lazy"
                sizes="350px"
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
