import React from 'react'
import styles from './NoticiaContenido.module.css'
import noticia1 from '../img/noticia1.jpg'
import noticia2 from '../img/noticia2.jpg'
import noticia3 from '../img/noticia3.jpg'
import { Link } from 'react-router-dom'

const NoticiaContenido = () =>{
    return(
        <div className={styles.contenedor}>
        <h3 className={styles.post__h3}>2022 / 12 / 06</h3>
        <h1>Intercambio comercial sobrepasa los 169.000 millones de dólares</h1>
        <div className={styles.si_centrar}>
        <div className={styles.post__grid}>
            <div>
                <img src={noticia1} alt="noticia1"/>
            </div>

            <div className={styles.si_izquierda}>
                <p className={styles.post__p}>Según datos del Banco Central difundidos esta mañana, el intercambio comercial alcanzó los US$ 169.176 millones a octubre de 2022, con un aumento del 12% en comparación con los primeros diez meses de 2021. <br/></p>

                 <p className={styles.post__p}>Las exportaciones nacionales fueron de US$ 80.827 millones, con un aumento del 4,7% (+US$ 3.660 millones), y tuvieron como destino 194 mercados diferentes, con ganancias en los envíos atribuibles a 128 de ellos.<br/></p>
                    
                  <p className={styles.post__p}>Según José Miguel Ahumada, subsecretario de Relaciones Económicas Internacionales, "la vitalidad de las exportaciones del país sigue sustentada en la oferta no cuprífera, que acumuló ventas al exterior por más de US$ 44.571 millones, lo que indica un crecimiento de 31,7% respecto de 2021." <br/></p>
                    
                  <p className={styles.post__p}>El carbonato de litio (+US$5.654 millones), el salmón (+US$1.212 millones), los fertilizantes (+US$489 millones), el yodo (+US$396 millones), las cerezas frescas (+US$351 millones), los tableros de fibra de madera (+US$221 millones) y la carne de ave (+US$208 millones) son algunas de las industrias que explican esta expansión. También destacan la madera aserrada, las uvas frescas, el metanol, el nitrato potásico, el equipamiento, la madera contrachapada, los moluscos y crustáceos, los productos metálicos y los neumáticos. <br/></p>
                    
                  <p className={styles.post__p}>El carbonato de litio lidera las exportaciones mineras no relacionadas con el cobre, una pauta que ha persistido durante los últimos ocho meses y que ha aumentado durante el periodo de análisis en un 783,6% (+US$ 5.479 millones). Mientras tanto, las exportaciones de sal y concentrado de molibdeno también aumentaron, en 21,4 y 31,2 millones de dólares, respectivamente. <br/></p>
                    
                  <p className={styles.post__p}>Según el subsecretario Ahumada, "el litio se ha consolidado rápidamente como un pilar de las exportaciones no tradicionales, presentándose como el gran contrapeso a las variaciones adversas que enfrentan las ventas de cobre al exterior en 2022." <br/></p>
                    
                  <p className={styles.post__p}>Asimismo, las exportaciones industriales aumentaron en 23,9% (+US$ 5.654 millones), siendo los aumentos de productos químicos, alimenticios y forestales los que impulsaron el crecimiento. Además, las exportaciones de servicios llegaron a 136 mercados de destino por un total de US$ 1,224 millones, con un aumento de 9% (+US$ 97 millones) y lideradas por Estados Unidos (US$ 441 millones), Perú (US$ 214 millones) y Colombia (US$ 94 millones). <br/></p>
                    
                  <p className={styles.post__p}>7.155 empresas declararon ventas en el exterior en los primeros diez meses de 2022, lo que supone un aumento del 5,3% respecto al periodo correspondiente de 2021. Las empresas relacionadas con la industria manufacturera fueron las responsables de este crecimiento, ya que registraron 4.332 exportadores en lo que va del año, 366 más que en 2021. Las mipymes constituyen el 50% de las empresas exportadoras en todo el periodo, mientras que las grandes empresas suponen el 38%. <br/></p>
                    
                  <p className={styles.post__p}>Dado su papel crítico en la valorización de nuestra oferta exportable y en su integración a las cadenas productivas regionales e internacionales, es significativo que el sector manufacturero lidere la expansión del número de empresas exportadoras, según el Subsecretario Ahumada. <br/></p>
                    
                  <p className={styles.post__p}>Nueve de las 16 zonas del país tuvieron aumentos en las exportaciones a nivel regional, destacando Antofagasta (+US$ 5.509 millones), Valparaso (+US$ 2.542 millones), Biobo (+US$ 1.489 millones) y Los Lagos (+US$ 1.201 millones). <br/></p>
                    
                  <p className={styles.post__p}>En comparación con el mismo período de 2021 (+US$ 14.280 millones), las importaciones aumentaron un 19,3%, alcanzando los US$ 88.350 millones. Los rubros de diésel (+US$ 3.409 millones), productos químicos (+US$ 1.189 millones), prendas de vestir (+US$ 1.045), carbón (+US$ 1.012 millones), gasolina (+US$ 909 millones), automóviles (+US$ 728 millones) y gas natural gaseoso (+US$ 612 millones) estuvieron entre las principales importaciones, junto con el cartón y el papel procesado,</p>
                
            </div>
            </div>
        </div>
        </div>
    )
}

export default NoticiaContenido;