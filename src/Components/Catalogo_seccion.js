import banner8 from '../img/banner8.jpg'
import banner9 from '../img/banner9.jpg'
import  styles  from './Catalogo_seccion.module.css'
const Catalogo_seccion = () => {
    const banners = [
        {img:banner1},
        {img:banner2},
        {img:banner3},
        {img:banner4},
        {img:banner5},
        {img:banner6},
        {img:banner7},
        {img:banner8},
        {img:banner9},
      ]
  return (
    <div className={styles.contenedor_margin_arriba_bloque}>
       <h1 className={styles.catalogo_titulo}>Secciones</h1>
        <div className={styles.grid__margin_lado_bloques}>
            <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner1} alt="Agroindustria"/>
                </a>
            </div>
             <div>
                  <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner2} alt="Cosmetica"/>
                  </a>
            </div>

            <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner3} alt="Co"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner4} alt="Reciclaje"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner5} alt="Industria textil"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner6} alt="Minera"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner7} alt="Producto de limpieza"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner8} alt="Reactivos quimicos"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner9} alt="Tratamiento de agua"/>
                </a>
             </div>

        </div>
       </div>
  )
}

export default Catalogo_seccion
