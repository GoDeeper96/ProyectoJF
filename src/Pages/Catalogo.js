import React, {useState,useRef, useEffect,useCallback} from 'react'
import { Link } from 'react-router-dom';
import  styles  from './Catalogo.module.css';
import Noticia from '../Components/Catalogo_seccion';
import Catalogo_seccion from '../Components/Catalogo_seccion';

const Catalago = () =>{
    return(
        <div>
            <div>
            <nav className={styles.navegacion_historial}>
                <Link  to='/' className={styles.navegacion_historial__enlace}>Inicio</Link>
                <p class={styles.p__navegación_historial_no_margin}>{'>'}</p>
                <Link  to='/catalogo' className={styles.navegacion_historial__enlace_activo}>Catalogo</Link>
           </nav> 
         </div>
            <Catalogo_seccion/>
        </div>
    )
}
export default Catalago;