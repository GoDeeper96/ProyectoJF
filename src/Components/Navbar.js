import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav class="navegacion">
        <a class="navegacion__enlace navegacion__enlace--activo" href="index.html">Inicio</a>
        <a class="navegacion__enlace" href="contacto.html">Contacto</a>
        <a class="navegacion__enlace" href="noticias.html">Noticias</a>
        <a class="navegacion__enlace" href="nosotros.html">¿Quienes somos?</a>
        <a class="navegacion__enlace" href="catalago.html">Catalago</a>
        <a class="navegacion__enlace" href="recetas.html">Recetas</a>       
    </nav>
    
  )
}
