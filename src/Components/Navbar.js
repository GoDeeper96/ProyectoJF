import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../img/LOGONAV.png';
const Navbar = () => {
  return (
    <div>
    <header className={styles.header}>
        <Link to='/'> <img className={styles.header__logo} src={logo} alt="logotipo"/></Link>
    </header>
    <nav className={styles.navegacion}>
        <Link to='/'className={styles.navegacion__enlace}>Inicio</Link>
        <Link to='/contacto' className={styles.navegacion__enlace} >Contacto</Link>
        <Link to='/noticia' className={styles.navegacion__enlace} >Noticias</Link>
        <Link to='/nosotros' className={styles.navegacion__enlace} >¿Quienes somos?</Link>
        <Link to='/catalogo' className={styles.navegacion__enlace} >Catalago</Link>
        <Link to='/recetas' className={styles.navegacion__enlace} >Recetas</Link>       
    </nav>
    </div>
  )
}
export default Navbar;
