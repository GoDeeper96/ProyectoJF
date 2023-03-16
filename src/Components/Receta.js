import React from 'react'
import './Receta.css'
import { Link, Outlet } from 'react-router-dom'

const Receta = (props) => {
    return(
        <div>
              <Link to={`/recetas/${props.nombre}`}>
                <img className="recetas__imagen" src={props.imagen} alt="receta1"/>
              </Link>
            <div className="recetas__informacion">
                <h3 className="recetas__nombre">{props.nombre}</h3>
                <p className="recetas__contenido_no_margin">{props.descripcion}</p>
            </div>
            <Outlet/>
        </div>
    )
}

export default Receta;