import React from 'react'
import styles from './Nosotros.module.css'
import MisionImagen from '../img/mision.jpg'
import VisionImagen from '../img/vision.jpg'
import { Link } from 'react-router-dom'
const Nosotros = () => {
  return (

    <div>
        <div>
                <nav className={styles.navegacion_historial}>
                    <Link  to='/' className={styles.navegacion_historial__enlace}>Inicio</Link>
                    <p className={styles.p__navegación_historial_no_margin}>{'>'}</p>
                    <Link  to='/nosotros' className={styles.navegacion_historial__enlace_activo}>¿Quiénes somos?</Link>
                </nav> 
            </div>

    <main className={styles.contenedor}>
        <h1>¿Quiénes somos?</h1>
        <div className={styles.nosotros__grid}>
            <div className={styles.nosotros__descripcion}>
                <p>Inversiones J & F es una empresa peruana que está conformada por emprendedores especialistas en la industria química con más de 20 años de experiencia, está enfocada en la venta y distribución de productos químicos de calidad al por mayor y al por menor satisfaciendo las necesidades del mercado.</p>
            </div>
            <div className={styles.nosotros__mision}>
                <img src={MisionImagen} alt="Mision"/>
                <div className={styles.nosotros__mision_contenido}>
                    <h2 className={styles.nosotros__h2}>Misión</h2>
                    <p className={styles.nosotros__p}>Venta y distribución de productos químicos de calidad a nivel nacional</p>
                </div>
            </div>
            
            <div className={styles.nosotros__vision}>
                <img src={VisionImagen} alt="vision"/>
                <div className={styles.nosotros__vision_contenido}>
                    <h2 className={styles.nosotros__h2}>Visión</h2>
                    <p className={styles.nosotros__p}>Ser una de las mejoras empresas de venta de productos e insumos químicos a nivel nacional e internacional, diferenciandonos de la atención al cliente profesional</p>
                </div>
            </div>
        </div>
    </main>
    </div>
  )
}

export default Nosotros
