
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './paginas/Inicio'
import { Nosotros } from './paginas/Nosotros'
import { Productos } from './paginas/Productos'
import { Navbar } from './componentes/Navbar'
import { Detalles } from './paginas/Detalles'
function App() {


  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/nosotros' element={<Nosotros/>}></Route>
      <Route path='/productos' element={<Productos/>}></Route>
      <Route path='/productos/:id' element={<Detalles/>}></Route>
    </Routes>

    </>
  )
}

export default App
