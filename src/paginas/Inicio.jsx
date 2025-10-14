
import  Comentarios  from "../componentes/Comentarios"
export function Inicio(){


    return(
        <div>
      <h1 className="text-3xl font-bold text-purple-600/60 my-[100px]">Bienvenid@ a PaperLine</h1><br />
      
      <p className="text-lg">Somos una empresa dedicada a ofrecer productos y servicios de calidad, comprometidos con la satisfacción de nuestros clientes y el desarrollo constante de nuestra comunidad.</p><br />

        <Comentarios/>


          </div>
        

    )
}
