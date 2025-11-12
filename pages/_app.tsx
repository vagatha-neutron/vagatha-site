import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Instrument_Serif, Monsieur_La_Doulaise } from "next/font/google";

// Configura las fuentes
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"], // puedes añadir más: ["400", "700"]
  variable: "--font-instrument-serif",
});

const monsieur = Monsieur_La_Doulaise({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-monsieur",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${instrumentSerif.variable} ${monsieur.variable}`}
    >
    <Component {...pageProps} />
    </main>
  );
}
