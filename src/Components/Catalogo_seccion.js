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
    <div className={styles.contenedor_margin_arriba_bloque}>
       <h1 className={styles.catalogo_titulo}>Secciones</h1>
        <div className={styles.grid__margin_lado_bloques}>
                {secciones.map(seccion=> 
                <Link to={`/catalogo/${seccion.nombre}`}>
                 <img className={styles.catalogo__imagen} src={seccion.img}/>
                </Link>)}

        </div>
        {/* <Routes>
            <Route to={`/catalogo/agroindustria/`${}}>
        </Routes> */}
        <Outlet/>
       </div>
  )
}

export default Catalogo_seccion
