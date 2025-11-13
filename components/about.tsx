"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export default function About() {
  return (
    <section className="bg-beige py-20 px-6 md:px-16">
        {/* Texto superior con ancho controlado */}
        <motion.div 
            style={{ willChange: "transform, opacity" }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="mx-auto text-center mb-24 w-[90%] max-w-[400px]">
            <p className="font-serif text-gray-800 text-lg leading-relaxed">
            Vágatha, una marca de joyería y accesorios que nace para acompañar los
            momentos que nos hacen sentir vivas. No vendemos solo piezas, vendemos
            significado.
            </p>
        </motion.div>

        {/* Texto grande superpuesto */}
        <div className="relative flex flex-col items-center text-center -mt-16 -mb-12 md:-mb-16 z-10">
            <motion.h2 
            style={{ willChange: "transform, opacity" }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="font-cursive text-[2rem] md:text-[3rem] lg:text-[4rem] text-gray-900 leading-tight w-[90%] max-w-[700px]">
            Una joyería creada para acompañar lo que realmente importa
            </motion.h2>
        </div>

        {/* Imágenes */}
        <div className="max-w-[800px] mx-auto px-4 mt-10">
            <div className="grid grid-cols-2 gap-2 sm:gap-6 items-start">
                <MotionImage
                src="/images/joyas_vagatha1.jpg"
                alt="Exhibidor Vágatha"
                width={500}
                height={650}
                className="w-full h-auto object-cover -translate-y-4 sm:-translate-y-4"
                style={{ willChange: "transform, opacity" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                />
                <MotionImage
                src="/images/joyas_vagatha2.jpg"
                alt="Joyas Vágatha"
                width={500}
                height={650}
                className="w-full h-auto object-cover translate-y-10 sm:translate-y-10"
                style={{ willChange: "transform, opacity" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                />
            </div>
        </div>
    </section>
  );
}
