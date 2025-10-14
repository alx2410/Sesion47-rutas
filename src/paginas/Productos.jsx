// Productos.jsx
import { listaProductos } from '../assets/productos';

export function Productos() {
  return (
    <div className="productos-pagina-container px-8 py-16">
      <h1 className="text-3xl font-bold text-purple-600/60 mb-12 text-center hover:text-pink-400 transition-colors">
        Productos de Oficina 💻📁
      </h1>

      {/* Contenedor principal en cuadrícula */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-8 
        place-items-center
      ">
        {listaProductos.map((producto) => (
          <div
            key={producto.id}
            className="
              bg-white 
              rounded-2xl 
              shadow-md 
              hover:shadow-xl 
              hover:scale-105 
              transition-transform 
              duration-300 
              w-full 
              max-w-[280px] 
              flex 
              flex-col 
              items-center
            "
          >
            {/* Imagen del producto */}
            <div className="w-full h-[220px] overflow-hidden rounded-t-2xl">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Información del producto */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {producto.nombre}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {producto.descripcion}
              </p>
              <p className="text-purple-600 font-bold text-lg">
                ${producto.precio.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
