import React from 'react'
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import  styles  from './Catalogo_seccion.module.css'
import { Link } from 'react-router-dom'
import { secciones } from './SeccionesArray';
const Catalogo_seccion = () => {
    // const secciones = [
    //     {nombre:"agroindustria",img:banner1},
    //     {nombre:"cosmetica",img:banner2},
    //     {nombre:"alimenticia",img:banner3},
    //     {nombre:"reciclaje",img:banner4},
    //     {nombre:"textil",img:banner5},
    //     {nombre:"minera",img:banner6},
    //     {nombre:"limpieza",img:banner7},
    //     {nombre:"reactivos",img:banner8},
    //     {nombre:"tratamiento",img:banner9},
    //   ]
  return (
    <div>
      {/* <div>
                <nav className={styles.navegacion_historial}>
                    <Link  to='/' className={styles.navegacion_historial__enlace}>Inicio</Link>
                    <p className={styles.p__navegación_historial_no_margin}>{'>'}</p>
                    <Link  to='/catalogo' className={styles.navegacion_historial__enlace_activo}>Secciones</Link>
                </nav> 
      </div> */}

    <div className={styles.contenedor_margin_arriba_bloque}>
       <h1 className={styles.catalogo_titulo}>Secciones</h1>
       <div className={styles.bloque__lados__bloque}>
        <div className={styles.grid__margin_lado_bloques}>
                {secciones.map(seccion=> 
                <Link to={`/catalogo/${seccion.nombre}`}>
                 <img className={styles.catalogo__imagen} src={seccion.img}/>
                </Link>)}

        </div>
        </div>
        {/* <Routes>
            <Route to={`/catalogo/agroindustria/`${}}>
        </Routes> */}
        <Outlet/>
       </div>
       </div>
  )
}

export default Catalogo_seccion
