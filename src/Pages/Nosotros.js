import React from 'react'
import styles from './Nosotros.module.css'
import MisionImagen from '../img/mision.jpg'
import VisionImagen from '../img/vision.jpg'
const Nosotros = () => {
  return (
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
  )
}

export default Nosotros
