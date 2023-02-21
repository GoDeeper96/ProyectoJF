import React from 'react'
import sliderServicios1 from '../img/slider_servicios1.JPG'
import sliderServicios2 from '../img/slider_servicios2.JPG'
import sliderServicios3 from '../img/slider_servicios3.JPG'
import sliderServicios4 from '../img/slider_servicios4.JPG'
import sliderServicios5 from '../img/slider_servicios5.JPG'
import styles from './Servicios_seccion.module.css'
const Servicios_seccion = (props) => {
    const sliderServicios = [
        {img:sliderServicios1},
        {img:sliderServicios2},
        {img:sliderServicios3},
        {img:sliderServicios4},
        {img:sliderServicios5},
      ]
  return (
    <div className={styles.slider__section_servicios}>
                <img src={sliderServicios[props.currentIndex].img} alt={`imgServicios${props.currentIndex+1}`} className={styles.slider__img_servicios}/>
        </div>
  )
}

export default Servicios_seccion
