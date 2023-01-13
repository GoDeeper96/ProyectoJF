
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navegador from '../src/Components/Navbar'  
import Catalogo from "../src/Pages/Catalogo";
function App() {
  return (
    <>
      <Router>
        <Navegador>
          <Routes> 
              <Route path='/catalogo'  element={<Products/>}/> 
              <Route path='/facturas'  element={<Facturas/>}/>   
              <Route path='/contacto'  element={<Contacto/>}/> 
              <Route path='/informacion'  element={<Informacion/>}/>  
          </Routes> 
        </Navegador> 
      </Router>
    </>
  );
}

export default App;
