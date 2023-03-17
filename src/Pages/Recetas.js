import React from 'react'
import styles from '../Pages/Recetas.module.css'
import { Recetas } from '../Components/ArrayRecetas'
import Receta from '../Components/Receta'
import { Link } from 'react-router-dom'
const RecetasGrupo = () => {
  return (
    <div>

      <div>
                <nav className={styles.navegacion_historial}>
                    <Link  to='/' className={styles.navegacion_historial__enlace}>Inicio</Link>
                    <p className={styles.p__navegación_historial_no_margin}>{'>'}</p>
                    <Link  to='/recetas' className={styles.navegacion_historial__enlace_activo}>Recetas</Link>
                </nav> 
            </div>


    <main className={styles.contenedor}>
    <h1>Recetas</h1>
    <div className={styles.bloque__lados__bloque}>
    <div className={styles.recetas__grid__margin_arriba_bloque_margin_lados_bloques}>
      {
        Recetas.map(receta=><Receta imagen={receta.imagen} nombreReceta={receta.nombreReceta} nombre={receta.nombre} descripcion={receta.descripcion}/>)
      }
    </div>
    </div>
</main>
</div>

  )
}

export default RecetasGrupo;


