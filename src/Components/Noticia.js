import React from 'react'
import styles from './Noticia.module.css'
import noticia1 from '../img/noticia1.jpg'
import noticia2 from '../img/noticia2.jpg'
import noticia3 from '../img/noticia3.jpg'
import { Link } from 'react-router-dom'


const Noticia=()=>{
    return(
        <div className={styles.contenedor}>
            <h1>Noticias</h1>
        <div className={styles.margin__arriba_bloque__lados__bloque}>  
        <div className={styles.noticias__grid}>
            <div>

                <div>
                    <Link to='/noticia-posteo'><img src={noticia1} alt="noticia1"/></Link>
                    <h3 className={styles.noticias__nombre}>Intercambio comercial sobrepasa los 169.000 millones de dólares</h3>
                    <p className={styles.noticias__contenido__no__margin}>Según datos del Banco Central difundidos esta mañana, el intercambio comercial alcanzó los US$ 169.176 millones a octubre de 2022, con un aumento del 12% en comparación con los primeros diez meses ...</p>
                </div>
            </div>

            <div>
                <div>
                    <Link to='/noticia1'><img src={noticia2} alt="noticia2"/></Link>
                    <h3 className={styles.noticias__nombre}>Carolyn Bertozzi es la octava mujer que recibe el Novel de Química</h3>
                    <p className={styles.noticias__contenido__no__margin}>Carolyn Bertozzi, investigadora y profesora de la Universidad de Stanford, se ha convertido en la octava mujer galardonada con el Premio Nobel de Química en 2022 por su trabajo en la llamada "quími...</p>
                </div>
            </div>

            <div>

                <div>
                    <Link to='/noticia1'><img src={noticia3} alt="noticia3"/></Link>
                    <h3 className={styles.noticias__nombre}>Energía nuclear, el punto final tecnológico a la radiactividad en Chernóbil es posible</h3>
                    <p className={styles.noticias__contenido__no__margin}>El método sin productos químicos de la startup Exlterra ha reducido la contaminación en un 46% en sólo un año. Con sus incursiones en el Bosque Rojo, uno de los lugares más peligrosos del mundo, y ...</p>
                </div>
            </div>

        </div>
        </div>  
        </div>
    )
}
export default Noticia;