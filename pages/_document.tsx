import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* METADATOS BÁSICOS */}
        <meta name="title" content="Vágatha | Joyería con intención" />
        <meta
          name="description"
          content="Vágatha, joyería y accesorios con intención. Encuentra piezas únicas que acompañan tus momentos más importantes en Plaza Altabrisa, Villahermosa."
        />
        <meta
          name="keywords"
          content="joyería, accesorios, anillos, collares, pulseras, Villahermosa, Tabasco, Vágatha, Plaza Altabrisa"
        />
        <meta name="author" content="Vágatha" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* OPEN GRAPH (para redes sociales) */}
        <meta property="og:title" content="Vágatha | Joyería con intención" />
        <meta
          property="og:description"
          content="Joyería y accesorios con intención en Plaza Altabrisa, Villahermosa. Descubre colecciones elegantes con significado."
        />
        <meta
          property="og:image"
          content="https://vagatha.vercel.app/images/preview_vagatha.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vagatha.vercel.app" />
        <meta property="og:locale" content="es_MX" />
        <meta property="og:site_name" content="Vágatha" />

        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vágatha | Joyería con intención" />
        <meta
          name="twitter:description"
          content="Joyería y accesorios con intención en Plaza Altabrisa, Villahermosa."
        />
        <meta
          name="twitter:image"
          content="https://vagatha.vercel.app/images/preview_vagatha.jpg"
        />

        {/* DATOS ESTRUCTURADOS JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JewelryStore",
              name: "Vágatha",
              image: "https://vagatha.vercel.app/images/preview_vagatha.jpg",
              url: "https://vagatha.vercel.app",
              description:
                "Joyería y accesorios con intención. Encuentra piezas únicas que acompañan tus momentos más importantes.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Plaza Altabrisa, Villahermosa, Tabasco",
                addressLocality: "Villahermosa",
                addressRegion: "Tabasco",
                postalCode: "86035",
                addressCountry: "MX",
              },
              openingHours: "Mo-Su 11:00-21:00",
              telephone: "+52 561 080 2424",
              sameAs: [
                "https://www.instagram.com/vagatha.joyeria",
                "https://www.facebook.com/vagatha.joyeria",
              ],
            }),
          }}
        />
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
