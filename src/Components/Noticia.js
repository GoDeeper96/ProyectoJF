import React from 'react'
import './Noticia.css'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const Noticia=(props)=>{
    return(

            <div>
                    <Link to={`/noticias/${props.nombreNoticia}`}>
                        <img src={props.imagen} alt="noticia1"/>
                    </Link>
                 <div>
                    <h3 className="noticias__nombre">{props.nombre}</h3>
                    <p className="noticias__contenido__no__margin">{props.descripcion}</p>
                </div>
            </div>
    )
}
export default Noticia;