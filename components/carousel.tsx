"use client";
import Image from "next/image";

const images = [
  "/images/manos_usando_joyeria_vagatha.jpg",
  "/images/manos_modelando_anillos_vagatha.jpg",
  "/images/mostrando_cadena_y_joyeria_vagatha.jpg",
  "/images/cinturon_vagatha1.jpg",
  "/images/modelo_viendose_en_el_espejo_joyeria_vagatha.jpg",
];

export default function Carrusel() {
  const loopImages = [...images, ...images]; // duplicamos

  return (
    <section className="bg-beige w-full overflow-hidden">
      <div className="slider-track">
        {loopImages.map((src, i) => (
          <div key={i} className="slide">
            <Image
              src={src}
              alt={`Vágatha carrusel ${i}`}
              fill
              sizes="350px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
