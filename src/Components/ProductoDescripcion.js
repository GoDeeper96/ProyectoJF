import React, { useEffect } from 'react'
import  './ProductoDescripcion.css'
import {
    useParams,
  } from 'react-router-dom';
import { sliderProductos } from './ProductosArrayImagenes'; 
const ProductoDescripcion = () => {
  const { producto } = useParams();
  const productoObjeto = sliderProductos.find(product => product.nombreProducto === producto);

  return (
    <main className="contenedor">
        <div className="productos_descripcion__grid margin-arriba_bloque margin--lados_bloques">
            <div className="si-centrar">
                <img className= "img__descripcion__productos zoom__descripcion__productos" src={productoObjeto.img} alt="sulfato_cobre_pentahidratado"/>
            </div>

            <div>
                <h1 className="si-izquierda productos_descripcion_titulo">{productoObjeto.nombre}</h1>
                <h4 className="productos_descripcion_subtitulo">Descripción</h4>
                <p className="productos_descripcion_texto">{productoObjeto.descripcion}</p>
                <div className="codigo-bg">
                    <p className="no-margin margin-izquierda codigo__producto--texto">{productoObjeto.codigoID}</p>
                </div>
                <hr/>
                <p className="productos_tamaño_texto">Tamaño</p>

                <button className="boton_producto" id="btn_doscincu_gramos">250 G</button>
                <button className="boton_producto" id="btn_quini_gramos">500 G</button>
                <button className="boton_producto" id="btn_un_kilo">1 Kg</button>
                <button className="boton_producto" id="btn_unmedio_kilo">1.5 Kg</button>
                <button className="boton_producto" id="btn_dos_kilos">2 Kg</button>
                <p className="productos_tamaño_texto">Contenedor</p>
                <button className="boton_producto" id="frascoProducto">Frasco</button>
                <button className="boton_producto" id="bolsaProducto">Bolsa</button>
                <p className="no-margin-abajo">Precio</p>
                <p className="no-margin productos__precio" id="precio_producto">{productoObjeto.precio}</p>
                <h4 className="detalles_tamaño_texto">Detalles del producto</h4>
                <div className="productos_detalles__grid detalles-bg">
                    <div>
                        <p className="detalles_producto--tamaño margin-izquierda">Por mayor cantidad</p>
                    </div>

                    <div className="contenido__texto-posicion">
                        <p className="detalles_producto--tamaño margin-izquierda">Si desea cotizar productos por una cantidad mayor a 2 kilos, escriba a este número y los asesores te atenderán +51 946 925 847</p>
                    </div>

                </div>
                <h4 className="adjuntos_tamaño">Adjuntos del producto</h4>
                <div className="adjunto-bg">
                    <div className="margin-arriba margin-izquierda">
                        <a download="HojaDeSeguridad" href="pdf/Hoja de seguridad - Inversiones JyF - SULFATO DE COBRE PENTAHIDRATADO.pdf">Hoja de seguridad - Inversiones JyF - SULFATO DE COBRE PENTAHIDRATADO</a>
                    </div>
                </div>
             </div>

        </div>
    </main>
  )
}

export default ProductoDescripcion
