import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/LOGONAV.png';
const Navbar = () => {
  return (
    <div>
    <header className="header">
    <div class="btn-menu margin--btn_menu">
			<label class="btn-menu--esconder" for="btn-menu">☰</label>
		</div>
        <Link to='/'> <img className="header__logo" src={logo} alt="logotipo"/></Link>
    </header>
    <nav className="navegacion">
        <Link to='/'className="navegacion__enlace">Inicio</Link>
        <Link to='/contacto' className="navegacion__enlace" >Contacto</Link>
        <Link to='/noticias' className="navegacion__enlace" >Noticias</Link>
        <Link to='/nosotros' className="navegacion__enlace" >¿Quienes somos?</Link>
        <Link to='/catalogo' className="navegacion__enlace" >Catalago</Link>
        <Link to='/recetas' className="navegacion__enlace" >Recetas</Link>       
    </nav>

    <input type="checkbox" id="btn-menu"/>
    <div class="container-menu">
        <div class="cont-menu">
            <nav>
                <Link to='/' class="navegacion__enlace navegacion__enlace--activo">Inicio</Link>
                <Link to='/contacto' class="navegacion__enlace" >Contacto</Link>
                <Link to='/noticias' class="navegacion__enlace" >Noticias</Link>
                <Link to='/nosotros' class="navegacion__enlace" >¿Quienes somos?</Link>
                <Link to='/catalogo' class="navegacion__enlace" >Catálogo</Link>
                <Link to='/recetas'  class="navegacion__enlace" >Recetas</Link>
            </nav>
            <label for="btn-menu">✖️</label>
        </div>
    </div>
    </div>
  )
}
export default Navbar;
