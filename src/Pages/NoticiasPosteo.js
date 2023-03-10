import React, {useState,useRef, useEffect,useCallback} from 'react'
import  styles  from './NoticiasPosteo.module.css';
import { Link } from 'react-router-dom';
import NoticiaContenido from '../Components/NoticiaContenido';

const NoticiasPosteo = () =>{

    return (
        <div>
          <div>
            <nav className={styles.navegacion_historial}>
                 <Link  to='/' className={styles.navegacion_historial__enlace}>Inicio</Link>
                <p class={styles.p__navegación_historial_no_margin}>{'>'}</p>
                <Link  to='/noticia' className={styles.navegacion_historial__enlace}>Noticias</Link>
                <p class={styles.p__navegación_historial_no_margin}>{'>'}</p>
                <Link  to='/noticia-posteo' className={styles.navegacion_historial__enlace_activo}>Intercambio comercial sobrepasa los 169.000 millones de dólares</Link>
            </nav> 
         </div>

        <NoticiaContenido/>
        </div>
      )
}

export default NoticiasPosteo;