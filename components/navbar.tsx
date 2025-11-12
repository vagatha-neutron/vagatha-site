export default function Navbar() {
  return (
      <nav className="fixed top-4 right-8 z-50 flex items-center gap-4">
        <ul className="flex items-center gap-4">
          {/* Instagram */}
          <li>
            <a 
              href="https://instagram.com/vagatha" // 🔗 tu enlace
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white/50 backdrop-blur-md rounded-full p-2 hover:bg-white/70 transition shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <img
                src="/images/icono_instagram.png"
                alt="Instagram Vágatha"
                className="w-6 h-6 object-contain"
              />
            </a>
          </li>

          {/* Facebook */}
          <li>
            <a 
              href="https://instagram.com/vagatha" // 🔗 tu enlace
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white/50 backdrop-blur-md rounded-full p-2 hover:bg-white/70 transition shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <img
                src="/images/icono_facebook.png"
                alt="Facebook Vágatha"
                className="w-6 h-6 object-contain"
              />
            </a>
          </li>

          {/* Contacto con WhatsApp */}
          <li>
            <a 
              href="https://wa.me/529933095786" // 🔗 tu enlace de WhatsApp
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/50 backdrop-blur-md rounded-full px-4 py-2 text-chocolate hover:bg-white/70 transition shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <span className="font-serif text-base">CONTACTO</span>
              <img
                src="/images/icono_whatsapp.png"
                alt="WhatsApp"
                className="w-4 h-4 object-contain"
              />
            </a>
          </li>
        </ul>
      </nav>
  );
}
