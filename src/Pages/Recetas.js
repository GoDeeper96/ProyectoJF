import React from 'react'
import styles from '../Pages/Recetas.module.css'
import { Link } from 'react-router-dom'
import receta1 from '../img/receta1.jpg'
import receta2 from '../img/receta2.jpg'
import receta3 from '../img/receta3.jpg'
import React from 'react'
import styles from '../Pages/Recetas.module.css'
import { Recetas } from '../Components/ArrayRecetas'
import Receta from '../Components/Receta'
import { Outlet } from 'react-router-dom'
const RecetasGrupo = () => {
  return (
    <main className={styles.contenedor}>
    <h1>Recetas</h1>
    <div className={styles.recetas__grid__margin_arriba_bloque_margin_lados_bloques}>
      {
        Recetas.map(receta=><Receta imagen={receta.imagen} nombre={receta.nombre} descripcion={receta.descripcion}/>)
      }
    </div>
    <Outlet/>
</main>

  )
}

export default RecetasGrupo;

export default Recetas
