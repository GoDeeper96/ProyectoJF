import React from 'react'
import {  useParams } from 'react-router-dom'
import { Recetas } from '../Components/ArrayRecetas'
import './RecetaDescripcion.css'
import { Link } from 'react-router-dom'

const RecetaDescripcion = () =>{
    const {receta} = useParams()
    const objetoReceta = Recetas.find(element=>element.nombreReceta===receta)
    
    return(

        <div>
            <div>
                <nav className="navegacion_historial">
                    <Link  to='/' className="navegacion_historial__enlace">Inicio</Link>
                    <p className="p__navegación_historial_no_margin">{'>'}</p>
                    <Link  to='/recetas' className="navegacion_historial__enlace">Recetas</Link>
                    <p className="p__navegación_historial_no_margin">{'>'}</p>
                    <Link  to='#' className="navegacion_historial__enlace_activo">{objetoReceta.nombre}</Link>
                </nav> 
            </div>

        <div className="contenedor">
        <h3 className="post__h3">2022 / 12 / 06</h3>
        <h1>{objetoReceta.nombre}</h1>
        <div className="si_centrar">
        <div className="bloque__lados__bloque">
        <div className="post__grid">
            <div>
                <img src={objetoReceta.imagen} alt="receta1"/>
            </div>

            <div className="si_izquierda">
                <h3 className="titulo__post">Insumos:</h3>
                {objetoReceta.ingredientes.map(element=><li type="disc">{element}</li>)}
            </div>

            <div className="si_izquierda">
                <h3 className="titulo__post">Preparación:</h3>
                {objetoReceta.texto.map(function(element,index,Array){return(<ol start={index+1}><li>{element}</li></ol>)})}

                {objetoReceta.ConsejoTexto.map(element=><p>{element}</p>)}
                
            </div>
            </div>
            </div>   
        </div>
        </div>
        </div>
    )
}

export default RecetaDescripcion;