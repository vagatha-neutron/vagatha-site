"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
/* ... resto del código del carrusel ... */

export default function Carrusel() {
  const images = [
    "/images/manos_usando_joyeria_vagatha.jpg",
    "/images/manos_modelando_anillos_vagatha.jpg",
    "/images/mostrando_cadena_y_joyeria_vagatha.jpg",
    "/images/guardando_en_el_bolsillo_joyeria_vagatha.jpg",
    "/images/modelo_viendose_en_el_espejo_joyeria_vagatha.jpg",
  ];

  // Duplicarlas para llenar pantallas grandes
  const extendedImages = [...images, ...images];

  return (
    <section className="w-full bg-beige">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        freeMode={{
            enabled:true,
            momentum: false,
        }}
        slidesPerView={"auto"}
        spaceBetween={10}
        speed={6000} // velocidad de desplazamiento
        allowTouchMove={false} // evita pausas al tocar
        autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false
        }}
        className="flex w-full h-[485px]"
        >

        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            className="!w-auto flex-shrink-0 h-[485px] overflow-hidden"
          >
            <img
              src={src}
              alt={`Vágatha carrusel ${i + 1}`}
              className="h-full w-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
