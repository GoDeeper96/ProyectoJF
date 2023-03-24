import React, {useState,useRef, useEffect,useCallback} from 'react'
import Slider_imagenes from '../Components/Slider_Imagenes';
import SliderServicios from '../Components/Servicios_seccion'
import Catalogo_seccion from '../Components/Catalogo_seccion';
import CarouselProductos from '../Components/CarouselProductos';
const Home = () => {
  const timeRef = useRef(null);
  const [currentIndex, SetCurrentIndex] = useState(0);
  const Anterior = () =>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderImages.length - 1 : currentIndex - 1;
    SetCurrentIndex(newIndex);
  }
  const Siguiente = useCallback(() => {
    const isLastSlide = currentIndex === sliderImages.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    SetCurrentIndex(newIndex);

  },[currentIndex,sliderImages])
  const rightArrow = '>'
  const leftArrow = '<'
  useEffect(()=>{
    if(timeRef.current){
        clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(()=>{
        Siguiente();
     
        
    },5000)
    return () => clearTimeout(timeRef.current);
  },[Siguiente])
  return (
    <>
   <Slider_imagenes/>
    <SliderServicios currentIndex={currentIndex}/>
    <Catalogo_seccion/>
    <CarouselProductos />
   
    </>
  )
}

export default Home;
