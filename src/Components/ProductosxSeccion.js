import React from 'react'
import styles from './ProductosxSeccion.module.css'
import { useParams } from 'react-router-dom';
import { sliderProductos } from './ProductosArrayImagenes'
import Producto from './Producto'
import { Link } from 'react-router-dom'
const ProductosxSeccion = () => {
    const { seccion } = useParams();  
  return (
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
  )
}

export default ProductosxSeccion
