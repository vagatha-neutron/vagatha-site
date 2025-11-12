"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-[400px] md:min-h-[600px] lg:min-h-[722px] bg-cover bg-center flex flex-col justify-start items-center text-center pt-1 overflow-hidden"
      style={{ backgroundImage: "url('/images/home_vagatha1.png')" }}
    >
      
      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center mt-14 px-6">
        <img
          src="/images/logo_vagatha.png"
          alt="Vágatha logo"
          className="w-[16rem] md:w-[22rem] mb-3 h-auto"
        />

        <h1 className="font-serif text-xl md:text-2xl text-white">
          <span className="font-serif italic">Joyería y accesorios con intención </span>
          en Plaza Altabrisa, Villahermosa
        </h1>
      </div>

      {/* Degradado inferior */}
      <div className="absolute z-10 bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent via-beige/50 to-beige" />
    </section>
  );
}
