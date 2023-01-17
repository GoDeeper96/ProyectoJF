import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navegador from "../src/Components/Navbar";  
import Catalogo from "../src/Pages/Catalogo";
import Home from "../src/Pages/Home";
function App() {
  return (
      <Router>
        <Navegador/>
          <Routes> 
              <Route path='/' element={<Home/>}/>
              <Route path='/contacto'  element={<Home/>}/>
              <Route path='/noticia'  element={<Home/>}/>                 
              <Route path='/nosotros'  element={<Home/>}/>  
              <Route path='/catalogo'  element={<Home/>}/> 
              <Route path='/recetas'  element={<Home/>}/>  
          </Routes> 
      </Router>
  );
}

export default App;
