export function UserCard({ imagen, nombre, cargo }) {
  return (
    <div className="bg-purple-100 border border-purple-300 rounded-2xl flex flex-col items-center p-4 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
      
      {/* Imagen */}
      <img
        src={imagen}
        alt={nombre}
        className="rounded-full object-cover w-32 h-32 border-4 border-purple-200"
      />
      
      {/* Nombre */}
      <h3 className="mt-3 text-[22px] font-semibold text-black text-center">
        {nombre}
      </h3>

      {/* Cargo */}
      <h4 className="text-black/70 text-[16px] text-center mt-1">
        {cargo}
      </h4>
    </div>
  );
}
