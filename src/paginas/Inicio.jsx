import { usersData } from "../assets/usuarios"
import { UserCard } from "../componentes/UserCard"
export function Inicio(){


    return(
        <div>
      <h1 className="text-3xl font-bold text-purple-600/60 my-[200px] hover:text-pink-400">Bienvenid@ a mi Pagina</h1><br />
      
      <p className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis consectetur perspiciatis itaque sint ea rem praesentium harum suscipit illo animi quibusdam quo, ut sunt inventore accusantium quis aperiam amet nam?</p><br />
        <ul>
          <li className="before:bg-pink-50">Nosotros</li>
          <li>Contacto</li>
          <li>Productos</li>
        </ul> 

        <div  className="grid grid-cols-4 gap-6 justify-items-center">
          {usersData.map((user)=>
            <UserCard key={user.id} imagen={user.imgUrl} nombre={user.name} cargo={user.title}/>
          )}
        </div>


          </div>
        

    )
}
