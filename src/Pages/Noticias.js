import React from 'react'
import styles from '../Pages/Noticias.module.css'
import { Noticias } from '../Components/ArrayNoticias'
import Noticia from '../Components/Noticia'
import { Outlet } from 'react-router-dom'

const NoticiasGrupo = () =>{

    return (
      <main className={styles.contenedor}>
         <h1>Noticias</h1>
        <div className={styles.noticias__grid}>
         {
          Noticias.map(noticia=><Noticia nombreNoticia={noticia.nombreNoticia} imagen={noticia.imagen} nombre={noticia.nombre}  descripcion={noticia.descripcion}/>)
         }
        </div>
        
      </main>
      )
}

export default NoticiasGrupo;
