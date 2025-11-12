export default function Isla() {
  return (
    <section className="bg-beige py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Imagen */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/isla_vagatha.png"
            alt="Isla Vágatha en Plaza Altabrisa"
            className="w-full max-w-[550px] object-cover"
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left space-y-5 self-center w-[90%] max-w-[430px]">
          <h2 className="font-serif italic text-4xl text-chocolate">
            NUESTRA <span className="not-italic">ISLA</span>
          </h2>

          <p className="font-serif text-lg text-chocolate leading-relaxed">
            Desde nuestra isla en Plaza Altabrisa, Villahermosa, ofrecemos una experiencia accesible, cercana y visualmente encantadora.
            Cada anillo, collar, arete o pulsera está cuidadosamente seleccionado para contar una historia: la tuya.
          </p>
          <p>  
            Porque lo emocional también puede ser elegante.
          </p>

          {/* Botón glassmorphism */}
          <a
            href="https://maps.app.goo.gl/dXgAVHPdBtBMH9t76"
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
        </div>
      </div>
    </section>
  );
}
