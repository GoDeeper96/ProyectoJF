import React from 'react'
import { useParams } from 'react-router-dom'
import { Noticias } from '../Components/ArrayNoticias'
import './NoticiaDescripcion.css'
import { Link } from 'react-router-dom'

const NoticiaDescripcion = () => {
    const {noticia} = useParams()
    const objetoNoticia = Noticias.find(element=>element.nombreNoticia===noticia)
    return(
        <div>

            <div>
                <nav className="navegacion_historial">
                    <Link  to='/' className="navegacion_historial__enlace">Inicio</Link>
                    <p className="p__navegación_historial_no_margin">{'>'}</p>
                    <Link  to='/noticias' className="navegacion_historial__enlace">Noticias</Link>
                    <p className="p__navegación_historial_no_margin">{'>'}</p>
                    <Link  to='#' className="navegacion_historial__enlace_activo">{objetoNoticia.nombre}</Link>
                </nav> 
            </div>

        <div className="contenedor">
        <h3 className="post__h3">2022 / 12 / 06</h3>
        <h1>{objetoNoticia.nombre}</h1>
        <div className="si_centrar">
        <div className="bloque__lados__bloque">
        <div className="post__grid">
            <div>
                <img src={objetoNoticia.imagen} alt="noticia1"/>
            </div>

            <div className="si_izquierda">
                {objetoNoticia.texto.map(element=><p className="post__p">{element} <br/></p> )}
            </div>
            </div>
            </div>
        </div>
        </div>

        </div>
    )

}
export default NoticiaDescripcion;