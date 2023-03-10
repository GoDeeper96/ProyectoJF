import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navegador from "../src/Components/Navbar";  
import Home from "../src/Pages/Home";
import Footer from "./Components/Footer";
import Contacto from "./Pages/Contacto";
import Noticias from "./Pages/Noticias";
import NoticiasPosteo from "./Pages/NoticiasPosteo";
import Nosotros from "./Pages/Nosotros"
import Catalago from "./Pages/Catalogo"
import Recetas from "./Pages/Recetas"
function App() {
  return (
      <Router>
        <Navegador/>
          <Routes> 
              <Route path='/' element={<Home/>}/>
              <Route path='/contacto'  element={<Contacto/>}/>
              <Route path='/noticia'  element={<Noticias/>}/>                   
              <Route path='/nosotros'  element={<Nosotros/>}/>  
              <Route path='/catalogo'  element={<Catalago/>}/> 
              <Route path='/recetas' element={<Recetas/>}/>
              <Route path='/noticia-posteo'  element={<NoticiasPosteo/>}/>   
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

