import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navegador from "../src/Components/Navbar";  
import Catalogo from "../src/Pages/Catalogo";
import Home from "../src/Pages/Home";
import Catalogo_seccion from "./Components/Catalogo_seccion";
import Footer from "./Components/Footer";
import Contacto from "./Pages/Contacto";
import Noticias from "./Pages/Noticias"
import Nosotros from "./Pages/Nosotros"
import Recetas from "./Pages/Recetas"
function App() {
  return (
      <Router>
        <Navegador/>
          <Routes> 
              <Route path='/' element={<Home/>}/>
              <Route path='/contacto'  element={<Contacto/>}/>
              <Route path='/noticias'  element={<Noticias/>}/>                 
              <Route path='/nosotros'  element={<Nosotros/>}/>  
              <Route path='/catalogo'  element={<Catalogo_seccion/>}/> 
              <Route path='/recetas' element={<Recetas/>}/>
              <Route path='/politicas-de-privacidad'  element={<Home/>}/>  
              <Route path='/cambios-y-devoluciones'  element={<Home/>}/>  
              <Route path='/terminos-y-condiciones'  element={<Home/>}/>  
              <Route path='/politicas-de-cookies'  element={<Home/>}/>  
              <Route path='/libro-de-reclamaciones'  element={<Home/>}/>  
          </Routes> 
          <Footer/>
      </Router>
  );
}

export default App;

