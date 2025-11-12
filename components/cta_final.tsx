export default function CtaFinal() {
  return (
    <section className="relative bg-beige pt-24 pb-6 px-6 text-center overflow-hidden">
      {/* Título principal */}
      <h2 className="font-serif italic max-w-[950px] text-[2.2rem] mx-auto md:text-7xl text-chocolate mb-4 leading-tight">
        COLECCIONES CON ESTILO, <span className="not-italic">INTENCIÓN Y DETALLES QUE DURAN</span>
      </h2>

      {/* Descripción */}
      <p className="max-w-[500px] mx-auto text-gray-800 text-lg leading-relaxed">
        Descubre nuestras piezas favoritas y encuentra aquella que te acompañe todos los días.
        Son joyas que puedes regalar o regalarte sin esperar una ocasión especial.
      </p>

      {/* Frase decorativa cursiva */}
      <h3 className="font-cursive text-[3rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] text-chocolate/20 mt-0 md:mt-[-2rem] mb-2">
        Encuentra tu pieza perfecta
      </h3>

      {/* Botón glassmorphism */}
      <a
        href="https://maps.google.com/?q=Vagatha+Plaza+Altabrisa"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/40 rounded-full px-6 py-3 text-chocolate font-serif text-base hover:bg-white/70 transition shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
      >
        <img
          src="/images/location_icon.png"
          alt="Ubicación"
          className="w-4 h-4 object-contain"
        />
        <span>Isla Vágatha, Plaza Altabrisa</span>
      </a>

      {/* Horarios */}
      <p className="mt-6 font-serif text-chocolate text-lg md:text-[1.5rem]">
        Lunes a domingo, 11:00 a.m. – 9:00 p.m.
      </p>

      {/* Decorativos de anillos */}
      <img
        src="/images/anillo_vagatha1.png"
        alt="Anillo decorativo izquierdo"
        className="absolute top-12 left-4 md:left-17 lg:left-30 w-24 md:w-36 lg:48 rotate-[-15deg]"
      />
      <img
        src="/images/anillo_vagatha2.png"
        alt="Anillo decorativo derecho"
        className="absolute bottom-[-2rem] right-[-1rem] md:right-[2rem] lg:right-[6rem] w-36 md:w-46 lg:w-56 object-cover"
      />
    </section>
  );
}
