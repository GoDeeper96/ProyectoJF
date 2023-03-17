import React from 'react'
import styles from './ProductosxSeccion.module.css'
import { useParams } from 'react-router-dom';
import { sliderProductos } from './ProductosArrayImagenes'
import {secciones} from '../Components/SeccionesArray'
import Producto from './Producto'
import { Link } from 'react-router-dom'
const ProductosxSeccion = () => {
    const { seccion } = useParams();  
    const objetoSeccion = secciones.find(element=>element.nombre===seccion)
  return (

    <div>
      
      <div>
                <nav className={styles.navegacion_historial}>
                    <Link  to='/' className={styles.navegacion_historial__enlace}>Inicio</Link>
                    <p className={styles.p__navegación_historial_no_margin}>{'>'}</p>
                    <Link  to='/catalogo' className={styles.navegacion_historial__enlace}>Secciones</Link>
                    <p className={styles.p__navegación_historial_no_margin}>{'>'}</p>
                    <Link  to='#' className={styles.navegacion_historial__enlace_activo}>{objetoSeccion.nombre}</Link>
                </nav> 
      </div>
    <main className={styles.contenedor}>
    <div className={styles.productos__grid}>
            {sliderProductos.filter(function(products,index,array){
              const secciones = products.seccion;
              const unaSeccion = secciones.split(',');  
              for (let i = 0; i < secciones.length; i++)
              {
                if(unaSeccion[i]===seccion)
                {
                  return products;
                }
              }
            }).map(producto=>
            <Producto seccion={seccion} nombreProducto={producto.nombreProducto} url={producto.img} nombre={producto.nombre} precio={producto.precio}/>

)
        }    
            {/* <div className="si-centrar">
                <a href="sulfato_cobre.html">
                    <img className="recetas__imagen" src="img/sulfato_cobre_pentahidratado.png" alt="sulfato_cobre_pentahidratado"/>
                </a>
                <div className="recetas__informacion">
                    <h3 className="productos__nombre">Sulfato de cobre (pentahidratado) </h3>
                    <p className="productos__contenido no-margin">S/7.50</p>
                </div>
            </div> */}
    </div>
    </main>
    </div>
  )
}

export default ProductosxSeccion
