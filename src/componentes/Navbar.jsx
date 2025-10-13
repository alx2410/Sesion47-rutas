import { NavLink, Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo + Nombre */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://img.freepik.com/vector-premium/diseno-logotipo-oficina-elementos-casa-techo-edificio_173603-2268.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-md object-cover"
          />
          <span >
            PaperLine
          </span>
        </Link>

        {/* Enlaces de navegación */}
        <div className="flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-gray-700 hover:text-purple-600 font-medium transition-colors ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : ""
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              `text-gray-700 hover:text-purple-600 font-medium transition-colors ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : ""
              }`
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              `text-gray-700 hover:text-purple-600 font-medium transition-colors ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : ""
              }`
            }
          >
            Productos
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `text-gray-700 hover:text-purple-600 font-medium transition-colors ${
                isActive
                  ? "text-purple-600 border-b-2 border-purple-600 pb-1"
                  : ""
              }`
            }
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
