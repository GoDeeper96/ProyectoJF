import React, {useState,useRef, useEffect,useCallback} from 'react'
import  styles  from './Home.module.css';
import Slider_imagenes from '../Components/Slider_imagenes';
import SliderServicios from '../Components/Servicios_seccion'
import Catalogo_seccion from '../Components/Catalogo_seccion';
import { sliderImages } from '../Components/SlidersArrayImagenes'
import CarouselProductos from '../Components/CarouselProductos';
import Footer from '../Components/Footer';
const Home = () => {
  

  const btnLeftStyle = {
    left: "1rem"
  }
  const btnRightStyle = {
    right: "1rem"
  }
  const transition1 ={
    transition:"all 0.5s"
  }
  const timeRef = useRef(null);
  const [currentIndex, SetCurrentIndex] = useState(0);
  const [currentSliderStyle,SetSliderStyle] = useState({})
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
        // SetSliderStyle(transition1)
        
    },5000)
    return () => clearTimeout(timeRef.current);
  },[Siguiente])
  return (
    <>
    <Slider_imagenes currentIndex={currentIndex} rightArrow={rightArrow} leftArrow={leftArrow} btnRightStyle={btnRightStyle} btnLeftStyle={btnLeftStyle} Siguiente={Siguiente} Anterior={Anterior}/>
    <SliderServicios currentIndex={currentIndex}/>
    <Catalogo_seccion/>
    <CarouselProductos currentIndex={currentIndex}/>
    <Footer/>
    </>
  )
}

export default Home;
