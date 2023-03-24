import React, {useState,useRef,useEffect} from 'react'
import styles from './Slider_imagenes.module.css'
import styled from 'styled-components'
import { sliderImages } from './SlidersArrayImagenes'
import Slider from './Slider'
const FlexRowStoreContent = styled.div`
 &{
  display:flex;
  box-sizing: border-box;
 }
`
const SwiperContentSection = styled.div`
&{
  touch-action:pan-y;
  z-index:1;
  padding:0;
  overflow: hidden;
  margin-left:auto;
  mergin-right:auto;
  list-style: none; 
}
`
const SliderSwiper = styled.div`
    display: flex;

    width: 100%;
    height: 100%;
    position: relative;
   
    transition: transform 200ms ease-in-out;
    transform: translate3d(${props=>props.DistancePx},0,0)
`
const Slider_imagenes = (props ) => {
  const [distancePx,SetDistancePx] = useState(0);
  const [Opacity, SetOpacity] = useState(0);
  const [ImageWidth, SetImageWidth] = useState(1903);
  const timeRef = useRef(null);
  const rightArrow = '>'
  const leftArrow = '<'
  const Siguiente = () =>{

 
    if(distancePx!==0&&distancePx!==-5709){
      
      SetDistancePx(distancePx-1903)
     }
     else if(distancePx===0){
      
      SetDistancePx(distancePx-1903)
     }
     else 
     {
      SetDistancePx(0)
     
     }
  
  }
  const Anterior = () =>{
    if(distancePx!==0&&distancePx!==5709){
    
      SetDistancePx(distancePx+1903)
    
     }
     else{
      SetDistancePx(0);
     }
  }
  useEffect(()=>{
    if(timeRef.current){
        clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(()=>{
        // Siguiente();
        // SetSliderStyle(transition1)
        
    },5000)
    return () => clearTimeout(timeRef.current);
  },[Siguiente])
  return (
    <div className={styles.SupContainer}>
    <FlexRowStoreContent >
    <SwiperContentSection >
        <SliderSwiper DistancePx={`${distancePx.toString()}px`} opacity={Opacity}>
            
              {sliderImages.map(slider => <Slider ImageUrl={slider.img} ImageWidth={ImageWidth}/> )}
                
            
        </SliderSwiper>
        
        <div className={styles.slider__btn} style={{right: "1rem"}} onClick={() => Siguiente()}>{rightArrow}</div>
        <div className={styles.slider__btn} style={{left: "1rem"}} onClick={() => Anterior()}>{leftArrow}</div>
        </SwiperContentSection>
    </FlexRowStoreContent>
    </div>
  )
}

export default Slider_imagenes
