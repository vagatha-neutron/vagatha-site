"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[600px] lg:min-h-[722px] bg-cover bg-center flex flex-col justify-start items-center text-center pt-1 overflow-hidden"
      style={{ backgroundImage: "url('/images/home_vagatha1.jpg')" }}
    >
      
      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center mt-14 px-6">
        <MotionImage
          src="/images/logo_vagatha.png"
          alt="Vágatha logo"
          width={350}
          height={200}
          className="w-[16rem] md:w-[22rem] mb-3 h-auto"
          style={{ willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        />

        <motion.h1 
          className="font-serif text-xl md:text-2xl text-white"
          style={{ willChange: "transform, opacity" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          >
          <span className="font-serif italic">Joyería y accesorios con intención </span>
          en Plaza Altabrisa, Villahermosa
        </motion.h1>
      </div>

      {/* Degradado inferior */}
      <div 
        className="absolute z-10 bottom-0 left-0 w-full h-1/4 bg-gradient-to-b from-transparent via-beige/50 to-beige"
        />
    </section>
  );
}
