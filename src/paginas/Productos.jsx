// Productos.jsx
// Asegúrate de que la ruta de importación a productos.js sea correcta.
import { listaProductos } from '../assets/productos'; 

// Importa tus estilos CSS si tienes uno, por ejemplo:
// import './Productos.css'; 

export function Productos (){
    return(
        <div className="productos-pagina-container">
            <h1>Productos de Oficina 💻📁</h1>
            
            {/* Contenedor principal para la cuadrícula de productos */}
            <div className="productos-grid">
                
                {/* 1. Iteramos sobre 'listaProductos' usando el método .map()
                  2. Por cada 'producto', retornamos la estructura JSX (el "card")
                  3. **IMPORTANTE**: Cada elemento generado por .map() debe tener una prop 'key' única.
                */}
                {listaProductos.map((producto) => (
                    // La tarjeta de cada producto
                    <div key={producto.id} className="producto-card">
                        
                        {/* Imagen del producto */}
                        <img 
                            src={producto.imagen} 
                            alt={producto.nombre} 
                            className="producto-imagen"
                        />
                        
                        {/* Información del producto */}
                        <div className="producto-info">
                            <h3 className="producto-nombre">{producto.nombre}</h3>
                            <p className="producto-descripcion">{producto.descripcion}</p>
                            <p className="producto-precio">
                                **Precio:** **${producto.precio.toFixed(2)}**
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
// NOTA: Para que esto se vea bien, deberás añadir estilos CSS para las clases:
// .productos-pagina-container, .productos-grid, .producto-card, .producto-imagen, etc.