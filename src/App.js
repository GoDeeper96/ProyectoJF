import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navegador from "../src/Components/Navbar";  
import Catalogo from "../src/Pages/Catalogo";
import Home from "../src/Pages/Home";
function App() {
  return (
    <>
      <Router>
        <Navegador>
          <Routes> 
              <Route path='/' element={<Home/>}/>
              <Route path='/contacto'  element={<div>Contacto</div>}/>
              <Route path='/noticia'  element={<div>Noticias</div>}/>                 
              <Route path='/nosotros'  element={<div>Quienes somos</div>}/>  
              <Route path='/catalogo'  element={<Catalogo/>}/> 
              <Route path='/recetas'  element={<div>Recetas</div>}/>  
          </Routes> 
        </Navegador> 
      </Router>
    </>
  );
}

export default App;
