import React from 'react'
import {  useParams } from 'react-router-dom'
import { Recetas } from '../Components/ArrayRecetas'
import './RecetaDescripcion.css'


const RecetaDescripcion = () =>{
    const {receta} = useParams()
    const objetoReceta = Recetas.find(element=>element.nombre===receta)
    return(

        <div className="contenedor">
        <h3 className="post__h3">2022 / 12 / 06</h3>
        <h1>{objetoReceta.nombre}</h1>
        <div className="si_centrar">
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

                <ol>
                    <li value="1">Corta una hoja de aloe vera y retira el gel. Déjalo en un recipiente y abre las nueces de lavado para sacarle las semillas.</li>
                    <li>Vierte el agua en una olla junto con las semillas de las nueces, el aloe vera y el romero. Deja que hierva a fuego lento removiendo de vez en cuando.</li>
                    <li>Transcurridos 15 minutos, cuela la mezcla con un colador fino y añade el jugo de limón y el aceite de almendras dulce.</li>
                    <li>Vuelve a remover para que todo quede bien integrado y guárdalo en un recipiente definitivo que quieras usar para guardar el champú.</li>
                    <li>Por último, puedes añadir más agua si crees que ha quedado muy espeso, pero recuerda agitar siempre el recipiente antes de usarlo.</li>
                </ol>

                <p>Esta receta de champú con aloe vera es ideal para el cabello seco, ya que esta planta es muy hidratante</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default RecetaDescripcion;