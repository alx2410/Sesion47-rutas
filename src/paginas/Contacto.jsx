// Importamos useState para manejar el estado local del componente
import { useState } from "react";

// Exportamos el componente principal
export default function FormularioContactoSimple() {
  // Estado del formulario: cada campo se guarda en este objeto
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  // Estado de errores: se guardan los mensajes de error por campo
  const [errores, setErrores] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Función que valida los campos y devuelve los errores
  const validar = () => {
    const nuevosErrores = {};

    // Nombre obligatorio (sin espacios vacíos)
    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    // Validación de formato de email usando regex
    if (!emailRegex.test(form.email)) {
      nuevosErrores.email = "Correo inválido. Usa un formato correcto.";
    }

    // El mensaje debe tener al menos 10 caracteres para ser considerado válido
    if (form.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
    }

    return nuevosErrores; // Devuelve todos los errores encontrados
  };

  const limpiarFormulario = () => {
    setForm({ nombre:"", email:"", mensaje:""});
  };

  // Cada vez que el usuario escribe, actualizamos el estado
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
};

  // Cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const nuevosErrores = validar(); // Ejecuta las validaciones

    // Si hay errores, se muestran en pantalla
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return; // No continúa el envío
    }

    // Si todo está correcto:
    alert("Mensaje enviado con éxito ✅");
    limpiarFormulario
    console.log("Datos enviados:", form);

    document.getElementById("contacto")

    // Limpiamos los errores y, opcionalmente, el formulario
    setErrores({});
    // setForm({ nombre: "", email: "", mensaje: "" });
  };

  // Renderizado del formulario
  return (
    <form id="contacto" onSubmit={handleSubmit}>
      {/* Título del formulario */}
      <h2>Formulario de Contacto</h2>

      {/* Campo: Nombre */}
      <div>
        <label>Nombre:</label><br />
        <input
          type="text"           // Campo de texto
          name="nombre"         // Clave del estado
          value={form.nombre}   // Valor actual
          onChange={handleChange} // Actualiza el estado al escribir
        />
        {/* Si hay un error en nombre, se muestra en rojo */}
        {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}
      </div><br />

      {/* Campo: Email */}
      <div>
        <label>Email:</label><br />
        <input
          type="email"          // Campo tipo email
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {/* Muestra error si el formato es inválido */}
        {errores.email && <p style={{ color: "red" }}>{errores.email}</p>}
      </div><br />

      {/* Campo: Mensaje (reemplaza el password anterior) */}
      <div>
        <label>Mensaje:</label><br />
        <textarea
          name="mensaje"          // Clave del estado
          rows="4"                // Número de líneas visibles
          value={form.mensaje}    // Valor actual
          onChange={handleChange} // Actualiza el estado al escribir
          placeholder="Escribe tu mensaje aquí..."
        ></textarea>
        {/* Si hay error en mensaje, se muestra en rojo */}
        {errores.mensaje && <p style={{ color: "red" }}>{errores.mensaje}</p>}
      </div>

      {/* Botón para enviar el formulario */}
      <button type="submit">Enviar</button>
    </form>
  );
}
