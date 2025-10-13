import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-purple-200 text-gray-800 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Sección datos de empresa */}
        <section>
          <h3 className="text-xl font-semibold mb-4">Datos de la empresa</h3>
          <h4 className="font-medium">Dirección</h4>
          <p className="text-sm mb-2">971 Santa Clorinda, San Martín de Porres</p>
          <h4 className="font-medium">Teléfono</h4>
          <p className="text-sm mb-2">934 998 293</p>
          <h4 className="font-medium">Correo</h4>
          <p className="text-sm mb-2">alevaez@gmail.com</p>
        </section>

        {/* Sección ubicación */}
        <section>
          <h4 className="text-lg font-semibold mb-4">Ubicación</h4>
          
          <div className="w-full h-40 md:h-52 rounded-xl overflow-hidden shadow-md">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.34663617231!2d-77.06295722579449!3d-12.019640241394551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cede39f7dc47%3A0x73c5c016d20e66a3!2sCETPRO%20San%20Mart%C3%ADn%20de%20Porres!5e0!3m2!1ses!2spe!4v1760366556240!5m2!1ses!2spe"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Mapa de ubicación"
  ></iframe>
</div>

        </section>

        {/* Redes sociales */}
        <section className="flex flex-col items-center md:items-end">
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="flex space-x-6 text-2xl">
            <FaFacebook className="hover:text-blue-600 transition-colors" />
            <FaInstagram className="hover:text-pink-500 transition-colors" />
            <FaTwitter className="hover:text-sky-500 transition-colors" />
          </div>
        </section>
      </div>

      <div className="text-center text-sm text-gray-600 mt-8 border-t border-gray-300 pt-4">
        © 2025 Tu Empresa. Todos los derechos reservados.
      </div>
    </footer>
  );
}
