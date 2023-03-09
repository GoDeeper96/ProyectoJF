import React from 'react'
import banner1 from '../img/banner1.jpg'
import banner2 from '../img/banner2.jpg'
import banner3 from '../img/banner3.jpg'
import banner4 from '../img/banner4.jpg'
import banner5 from '../img/banner5.jpg'
import banner6 from '../img/banner6.jpg'
import banner7 from '../img/banner7.jpg'
import banner8 from '../img/banner8.jpg'
import banner9 from '../img/banner9.jpg'
import  styles  from './Catalogo_seccion.module.css'
import { Link } from 'react-router-dom'
const Catalogo_seccion = () => {
    const banners = [
        {img:banner1},
        {img:banner2},
        {img:banner3},
        {img:banner4},
        {img:banner5},
        {img:banner6},
        {img:banner7},
        {img:banner8},
        {img:banner9},
      ]
  return (
    <div className={styles.contenedor_margin_arriba_bloque}>
       <h1 className={styles.catalogo_titulo}>Secciones</h1>
        <div className={styles.grid__margin_lado_bloques}>
            <div>
                <Link to='/catalogo/agroindustria'>
                    <img className={styles.catalogo__imagen} src={banner1} alt="Agroindustria"/>
                </Link>
                {/* <a href="catalago.html">
                    
                </a> */}
            </div>
             <div>
                <Link to='/catalogo/cosmetica'>
                    <img className={styles.catalogo__imagen} src={banner2} alt="Cosmetica"/>
                </Link>
            </div>

            <div>
                <Link to='/catalogo/industria-alimenticia'>
                    <img className={styles.catalogo__imagen} src={banner3} alt="Alimentos"/>
                </Link>
             </div>

             <div>
                <Link to='/catalogo/reciclaje'>
                    <img className={styles.catalogo__imagen} src={banner4} alt="Reciclaje"/>
                </Link>
             </div>

             <div>
                <Link to='/catalogo/industria-textil'>
                    <img className={styles.catalogo__imagen} src={banner5} alt="Industria textil"/>
                </Link>

             </div>

             <div>
                <Link to='/catalogo/industria-minera'>
                    <img className={styles.catalogo__imagen} src={banner6} alt="Minera"/>
                </Link>
             </div>
             <div>
                <Link to='/catalogo/productos-limpieza'>
                    <img className={styles.catalogo__imagen} src={banner7} alt="Producto de limpieza"/>
                </Link>          
             </div>
             <div>
                <Link to='/catalogo/reactivos-quimicos'>
                    <img className={styles.catalogo__imagen} src={banner8} alt="Reactivos quimicos"/>
                </Link>
             </div>

             <div>
                <Link to='/catalogo/tratamiento-agua'>
                    <img className={styles.catalogo__imagen} src={banner9} alt="Tratamiento de agua"/>
                </Link>

                    
             </div>

        </div>
       </div>
  )
}

export default Catalogo_seccion
