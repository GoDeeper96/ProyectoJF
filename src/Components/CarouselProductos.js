import React, {useState,useRef, useEffect,useCallback} from 'react'
import Producto from './Producto'
import styles from './CarouselProductos.module.css'
import { sliderProductos } from './ProductosArrayImagenes'
import styled, { keyframes } from 'styled-components'
const StyledArrowLeft = styled.i`
& {
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid;
  transform: scale(var(--ggs, 1.4));
  border-radius: 22px;
  color:#001f3f;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
&::after,
&::before {
  content: '';
  display: block;
  box-sizing: border-box;
  position: absolute;
  left: 4px;
  color:#001f3f;
  
}
&::after {
  width: 6px;
  height: 6px;
  border-bottom: 2px solid;
  border-left: 2px solid;
  transform: rotate(45deg);
  bottom: 6px;
  color:#001f3f;
}
&::before {
  width: 10px;
  height: 2px;
  bottom: 8px;
  background: #001f3f;
}
&:hover,
&:focus {
  color: #AAAAAA;
}
&:active {
  color: #AAAAAA;
}
`
const StyledArrowRight = styled.i`
& {
box-sizing: border-box;
position: relative;
display: block;
width: 22px;
height: 22px;
border: 2px solid;
transform: scale(var(--ggs, 1.4));
border-radius: 20px;
color:#001f3f;
cursor: pointer;
transition: all 0.3s ease-in-out;
}
&::after,
&::before {
content: '';
display: block;
box-sizing: border-box;
position: absolute;
right: 4px;
color:#001f3f;

}
&::after {
width: 6px;
height: 6px;
border-top: 2px solid;
border-right: 2px solid;
transform: rotate(45deg);
bottom: 6px;
color:#001f3f;

}
&::before {
width: 10px;
height: 2px;
bottom: 8px;
background: #001f3f;
}
&:hover,
&:focus {
  color: #AAAAAA;
  
}
&:active {
  color: #AAAAAA;
}
`
const StyledRhombus = styled.i`
& {
box-sizing: border-box;
position: relative;
display: block;
transform: rotate(45deg) scale(var(--ggs, 1));
width: 14px;
height: 14px;
border: 4.3px solid;
transition: all 0.4s ease-in-out;
cursor: pointer;
color:#001f3f;
}
&:hover,
&:focus {
  color: #AAAAAA;
  
}
&:active {
  color: #AAAAAA;
}
`
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
const FlexTheSwiper = styled.div`
  display:flex;
  z-index:1;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  position: relative;
  
  transition: transform 200ms ease-in-out;
  transform: translate3d(${props=>props.distancePx},0px,0px);
  
`
const CarouselProductos = (props) => {
const OriginalArray = sliderProductos.filter(producto=> producto.UltimoPd==true)
const ori=sliderProductos.filter(producto=> producto.UltimoPd==true)
const lastArray = ori.concat(OriginalArray)
const timeRef = useRef(null);
const [currentIndex, SetCurrentIndex] = useState(0);

const [distancePx,SetDistancePx] = useState(0)

const [productosDestacados, SetProductosDestacados] = useState(OriginalArray)


const Siguiente = useCallback(() => {


if(distancePx!==0&&distancePx!==-480){
  console.log(distancePx)
  SetDistancePx(distancePx-240)

 }
 else if(distancePx===0){
  console.log(distancePx)
  SetDistancePx(distancePx-240)
 
 }
 else{
  SetDistancePx(0);
 }
 
},[distancePx])


const Anterior = () =>{
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? productosDestacados.length - 1 : currentIndex - 1;
  SetCurrentIndex(newIndex);
}
const GiveCurrent = (producto,index) =>{
  // SetProductosDestacados([]);
  const currentProducto= producto;
  if(productosDestacados[0].nombre!==currentProducto)
  {
    
    SetProductosDestacados([]);
    if(index===OriginalArray.length)
    {
      return;
    }
    else{
      const firstPart = OriginalArray.slice(index,7)
      const IsThereRest = index === 0;
      const newArray = IsThereRest? firstPart: firstPart.concat(OriginalArray.slice(0,index));
      SetProductosDestacados(newArray);
    }
    
  }

}
useEffect(()=>{
  if(timeRef.current){
      clearTimeout(timeRef.current);
      
  }
  timeRef.current = setTimeout(()=>{
      // Siguiente();
      
  },4000)
  return () => clearTimeout(timeRef.current);
},[Siguiente])


  return (
    <div className={styles.SupContainer}>
    <h1>Productos Destacados</h1>
    
      <FlexRowStoreContent>
        <SwiperContentSection>
          <FlexTheSwiper distancePx={`${distancePx.toString()}px`}>
     {productosDestacados.map(function(producto,index,array)
      {
        return(
        <Producto 
        goKey={index}
          nombreProducto={producto.nombreProducto} 
          url={producto.img} 
          nombre={producto.nombre} 
          precio={producto.precio}/>)
        })}
        </FlexTheSwiper>
        </SwiperContentSection>
        </FlexRowStoreContent>
    <div className={styles.ArrowSliders}>
    <StyledArrowLeft onClick={Anterior}/>
    <div className={styles.rombos}>
        {OriginalArray.map((producto,index)=> <StyledRhombus key={producto.seccion+index} onClick={()=>GiveCurrent(producto,index)}/>)}
        </div>
    <StyledArrowRight onClick={Siguiente}/>
    </div>
    </div>
  )
}

export default CarouselProductos
