import React from 'react'
import styles from './Slider_Imagenes.module.css'

import { sliderImages } from './SlidersArrayImagenes'
const Slider_imagenes = (props ) => {

  return (
    <section className={styles.contenedor__slider}>
        <div className={styles.slider}>
            <div className={styles.slider__section}>
                <img src={sliderImages[props.currentIndex].img} alt={`img${props.currentIndex+1}`} className={styles.slider__img}/>
            </div>
        </div>
        <div className={styles.slider__btn} style={props.btnRightStyle} onClick={props.Siguiente}>{props.rightArrow}</div>
        <div className={styles.slider__btn} style={props.btnLeftStyle} onClick={props.Anterior}>{props.leftArrow}</div>
    </section>
  )
}

export default Slider_imagenes
