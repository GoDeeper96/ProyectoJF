import React, {useState,useRef, useEffect,useCallback} from 'react'
import Slider_imagenes from '../Components/Slider_Imagenes';
import SliderServicios from '../Components/Servicios_seccion'
import Catalogo_seccion from '../Components/Catalogo_seccion';
import CarouselProductos from '../Components/CarouselProductos';

const Home = () => {
  
  return (
    <>
   <Slider_imagenes/>

    <Catalogo_seccion/>
    <CarouselProductos />
   
    </>
  )
}

export default Home;
