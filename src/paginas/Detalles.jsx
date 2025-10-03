import { useParams } from "react-router-dom";
import { listaProductos} from "../assets/productos"

export function Detalles() {
  const { id } = useParams();
  const producto = listaProductos.find(p => p.id === Number(id));

  if (!producto) {
    return <div>Producto no existe</div>;
  }

  return (
    <div>
      <>
        <h1 id="detalle-title">{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p>{producto.precio}</p>
      </>
    </div>
  );

}
