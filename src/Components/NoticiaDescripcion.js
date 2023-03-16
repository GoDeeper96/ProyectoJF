import React from 'react'
import { useParams } from 'react-router-dom'
import { Noticias } from '../Components/ArrayNoticias'
import './NoticiaDescripcion.css'

const NoticiaDescripcion = () => {
    const {noticia} = useParams()
    const objetoNoticia = Noticias.find(element=>element.nombreNoticia===noticia)
    return(
        <div className="contenedor">
        <h3 className="post__h3">2022 / 12 / 06</h3>
        <h1>{objetoNoticia.nombreNoticia}</h1>
        <div className="si_centrar">
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
    )

}
export default NoticiaDescripcion;