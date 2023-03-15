import React from 'react'
import './LibroReclamaciones.css'
import { Link } from 'react-router-dom'

const LibroReclamaciones = () => {
    return(

        <div>
        <div>
        <nav className="navegacion_historial">
                <Link  to='/' className="navegacion_historial__enlace">Inicio</Link>
                <p className="p__navegación_historial_no_margin">{'>'}</p>
                <Link  to='/libro-de-reclamaciones' className="navegacion_historial__enlace_activo">Libro de reclamaciones</Link>
           </nav> 
        </div>

        <main className='contenedor'>
            <h1>Libro de reclamaciones</h1>
            <form className="formulario">
            <div className="campo">
                <label className="campo__label" for="email">E-mail</label>
                <input 
                    className="campo__field"
                    type="email" 
                    placeholder="Por ejemplo: email@dominio.com" 
                    id="email"
                />
            </div>

            <div className="campo">
                <label className="campo__label" for="nombre">Nombre</label>
                <input 
                    className="campo__field"
                    type="text" 
                    placeholder="Por ejemplo: José Sanchez Yagui" 
                    id="nombre"
                />
            </div>

            <div className="campo">
                <label className="campo__label" for="telefono">Teléfono</label>
                <input 
                    className="campo__field"
                    type="tel" 
                    placeholder="Por ejemplo: 965458978" 
                    id="telefono"
                />
            </div>

            <div className="campo">
                <label className="campo__label" for="mensaje">Mensaje</label>
                <textarea 
                    className="campo__field__textarea"
                    placeholder="Escribe tu mensaje aquí..." 
                    id="mensaje"
                ></textarea>
            </div>

            <div className="campo__boton">
                <input type="submit" value="Enviar" className="boton__primario"/>
            </div>
        </form>
            
        </main>
        </div>
    )
}

export default LibroReclamaciones;