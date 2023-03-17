import React from 'react'
import styles from '../Pages/Noticias.module.css'
import { Noticias } from '../Components/ArrayNoticias'
import Noticia from '../Components/Noticia'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NoticiasGrupo = () =>{

    return (
      <div>
        <div>
                <nav className={styles.navegacion_historial}>
                    <Link  to='/' className={styles.navegacion_historial__enlace}>Inicio</Link>
                    <p className={styles.p__navegación_historial_no_margin}>{'>'}</p>
                    <Link  to='/noticias' className={styles.navegacion_historial__enlace_activo}>Noticias</Link>
                </nav> 
            </div>
      
      <main className={styles.contenedor}>
         <h1>Noticias</h1>
         <div className={styles.margin__arriba_bloque__lados__bloque}>
        <div className={styles.noticias__grid}>
         {
          Noticias.map(noticia=><Noticia nombreNoticia={noticia.nombreNoticia} imagen={noticia.imagen} nombre={noticia.nombre}  descripcion={noticia.descripcion}/>)
         }
        </div>
        </div>
      </main>
      </div>
      )
}

export default NoticiasGrupo;
