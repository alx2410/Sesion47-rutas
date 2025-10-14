import { usersData } from "../assets/usuarios"
import { UserCard } from "../componentes/UserCard"


export function Nosotros(){
    return(
        
        <div>
         <h1 className="text-3xl font-bold text-purple-600/40 my-[100px]">Conoce a nuestro equipo de trabajo</h1>   
    
         <div  className="grid grid-cols-4 gap-6 justify-items-center">
          {usersData.map((user)=>
            <UserCard key={user.id} imagen={user.imgUrl} nombre={user.name} cargo={user.title}/>
          )}
        </div>
        
        </div>
        

    )
}