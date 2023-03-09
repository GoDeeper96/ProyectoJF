import React from 'react'
import styles from '../Pages/Recetas.module.css'
import { Link } from 'react-router-dom'
import receta1 from '../img/receta1.jpg'
import receta2 from '../img/receta2.jpg'
import receta3 from '../img/receta3.jpg'
const Recetas = () => {
  return (
    <main className={styles.contenedor}>
    <h1>Recetas</h1>
    <div className={styles.recetas__grid__margin_arriba_bloque_margin_lados_bloques}>
        <div>
            {/* <a href="recetas_post_aloe.html"> */}
              <Link to="/recetas/receta-aloe-vera">
                <img className={styles.recetas__imagen} src={receta1} alt="receta1"/>
              </Link>
            <div className={styles.recetas__informacion}>
                <h3 className={styles.recetas__nombre}>Shampoo artesanal de aloe vera</h3>
                <p className={styles.recetas__contenido_no_margin}>Insumos: 1 hoja de aloe vera o sábila150 mililitros de agua mineral2 cucharadas de aceite de almendras dulces1 hoja de romero fresco15 nueces de lavado o nueces secas de jabón ...</p>
            </div>
        </div>

        <div>
            <Link to="/recetas/receta-post-gel">
                <img className={styles.recetas__imagen} src={receta2}alt="receta1"/>
            </Link>
            <div className={styles.recetas__informacion}>
                <h3 className={styles.recetas__nombre}>Gel antibacterial casero</h3>
                <p className={styles.recetas__contenido_no_margin}>Ingredientes: Alcohol (etanol) (80%, volumen/volumen (v/v))Glicerina (1,45% v/v)Peróxido de hidrógeno (0,125% v/v)Agua fría hervida Preparación: Deposita el alcohol en una botella grande o en el re...</p>
            </div>
        </div>

        <div>

            <Link to="/recetas/receta-post-gel">
                <img className={styles.recetas__imagen} src={receta3} alt="receta1"/>
              </Link>
            <div className={styles.recetas__informacion}>
                <h3 className={styles.recetas__nombre}>Perfume natural casero con esencias</h3>
                <p className={styles.recetas__contenido_no_margin}>Insumos: Alcohol puro, sin ningún olor.Un poco de agua.Aceites esenciales para los aromas.Recipiente de cristal oscuro. En cada perfume, tendrá que haber tres notas diferentes que conseguirás con l...</p>
            </div>
        </div>

    </div>
</main>

  )
}

export default Recetas
