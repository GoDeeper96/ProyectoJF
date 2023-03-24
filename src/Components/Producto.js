import React from 'react'
import styles from './Producto.module.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ProductContainer =styled.div`
  text-align: center;
  visibility:${props=>props.visibility};
  display:${props=>props.display};
  `
const Producto = (props) => {
  // const ProductCSS= styled.div`
  // text-align: center;
  // transition: all 0.5s ease-out;

  // `;
  
  return (
    <ProductContainer key={props.goKey} visibility={props.visibility} display={props.display}> 
                <Link to={`/${props.nombreProducto}`}>
                  <img  className={styles.recetas__imagen} src={props.url}/>
                </Link>
                {/* <a href="sulfato_cobre.html">
                    
                </a> */}
                <div >
                    <h3 className={styles.productos__nombre}>{props.nombre} </h3>
                    <p className={styles.productos__contenido}>{props.precio}</p>
                </div>

  </ProductContainer>
    
  )
}
export default Producto
