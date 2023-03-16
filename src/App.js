import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navegador from "../src/Components/Navbar";  
import Home from "../src/Pages/Home";
import Catalogo_seccion from "./Components/Catalogo_seccion";
import Footer from "./Components/Footer";
import Contacto from "./Pages/Contacto";
import Noticias from "./Pages/Noticias"
import Nosotros from "./Pages/Nosotros"
import RecetasGrupo from "./Pages/Recetas";
import RecetaDescripcion from "./Components/RecetaDescripcion";
import NoticiaDescripcion from "./Components/NoticiaDescripcion";
import NoticiasGrupo from "./Pages/Noticias";
import { sliderProductos } from "./Components/ProductosArrayImagenes";
import ProductoDescripcion from "./Components/ProductoDescripcion";
import ProductosxSeccion from "./Components/ProductosxSeccion";
import PoliticasPrivacidad from "./Pages/PoliticasPrivacidad";
import CambiosDevoluciones from "./Pages/CambiosDevoluciones";
import TerminosCondiciones from "./Pages/TerminosCondiciones";
import PoliticasCookies from "./Pages/PoliticasCookies";
import LibroReclamaciones from "./Pages/LibroReclamaciones";
import SocialBar from "./Components/SocialBar";
function App() {
  return (
      <Router>
        <Navegador/>
        <SocialBar/>
          <Routes> 
             <Route path='/' element={<Home/>}/>
              <Route path='/contacto'  element={<Contacto/>}/>
              <Route path='/recetas' element={<RecetasGrupo/>}/>
              <Route path='/recetas/:receta' element={<RecetaDescripcion/>}/>
              <Route path='/noticias'  element={<NoticiasGrupo/>}/>      
              <Route path='/noticias/:noticia'  element={<NoticiaDescripcion/>}/>                   
              <Route path='/nosotros'  element={<Nosotros/>}/>  
              <Route path='/catalogo'  element={<Catalogo_seccion />}/>
              <Route path='/catalogo/:seccion'  element={<ProductosxSeccion />}/>
              <Route path=':producto' element={<ProductoDescripcion/>}/>
              <Route path='/politicas-de-privacidad'  element={<PoliticasPrivacidad/>}/>  
              <Route path='/cambios-y-devoluciones'  element={<CambiosDevoluciones/>}/>  
              <Route path='/terminos-y-condiciones'  element={<TerminosCondiciones/>}/>  
              <Route path='/politicas-de-cookies'  element={<PoliticasCookies/>}/>  
              <Route path='/libro-de-reclamaciones'  element={<LibroReclamaciones/>}/>   
              <Route path='*' element={<h1>Not Found</h1>}/>
          </Routes> 
          <Footer/>
      </Router>
  );
}

export default App;

