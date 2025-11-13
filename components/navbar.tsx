import Image from "next/image";

export default function Navbar() {
  return (
      <nav className="fixed top-4 right-8 z-50 flex items-center gap-4">
        <ul className="flex items-center gap-4">
          {/* Instagram */}
          <li>
            <a 
              href="https://www.instagram.com/vagathamx/?igsh=MWZmMDZqMjFkczJ1aQ%3D%3D#" // 🔗 tu enlace
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white/50 backdrop-blur-md rounded-full p-2 hover:bg-white/70 transition shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/icono_instagram.png"
                alt="Instagram Vágatha"
                width={16}
                height={16}
                className="w-6 h-6 object-contain"
              />
            </a>
          </li>

          {/* Facebook */}
          <li>
            <a 
              href="https://www.facebook.com/vagathajoyeria" // 🔗 tu enlace
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white/50 backdrop-blur-md rounded-full p-2 hover:bg-white/70 transition shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <Image
                src="/images/icono_facebook.png"
                alt="Facebook Vágatha"
                width={16}
                height={16}
                className="w-6 h-6 object-contain"
              />
            </a>
          </li>

          {/* Contacto con WhatsApp */}
          <li>
            <a 
              href="https://wa.link/kpqoe5" // 🔗 tu enlace de WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/50 backdrop-blur-md rounded-full px-4 py-2 text-chocolate hover:bg-white/70 transition shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <span className="font-serif text-base">CONTACTO</span>
              <Image
                src="/images/icono_whatsapp.png"
                alt="WhatsApp"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
            </a>
          </li>
        </ul>
      </nav>
  );
}
