import React from 'react'
import styles from '../Pages/Recetas.module.css'
import { Recetas } from '../Components/ArrayRecetas'
import Receta from '../Components/Receta'
const RecetasGrupo = () => {
  return (
    <main className={styles.contenedor}>
    <h1>Recetas</h1>
    <div className={styles.recetas__grid__margin_arriba_bloque_margin_lados_bloques}>
      {
        Recetas.map(receta=><Receta imagen={receta.imagen} nombre={receta.nombre} descripcion={receta.descripcion}/>)
      }
    </div>
</main>

  )
}

export default RecetasGrupo;


