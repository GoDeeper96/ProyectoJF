import React, {useState,useRef, useEffect,useCallback} from 'react'
import { Link } from 'react-router-dom';
import  styles  from './Noticias.module.css';
import Noticia from '../Components/Noticia';

const Noticias = () =>{

    return (
        <div>
       <div>
        <nav className={styles.navegacion_historial}>
          <Link  to='/' className={styles.navegacion_historial__enlace}>Inicio</Link>
          <p class={styles.p__navegación_historial_no_margin}>{'>'}</p>
          <Link  to='/noticia' className={styles.navegacion_historial__enlace_activo}>Noticias</Link>
           </nav> 
         </div>
        <Noticia/>
        </div>
      )
}

export default Noticias;