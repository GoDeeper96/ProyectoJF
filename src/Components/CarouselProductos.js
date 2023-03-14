import React, {useState,useRef, useEffect,useCallback} from 'react'
import Producto from './Producto'
import styles from './CarouselProductos.module.css'
import { sliderProductos } from './ProductosArrayImagenes'
import styled from 'styled-components'
import { secciones } from './SeccionesArray';
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
const Container = styled.div`

  & {display: flex;
  gap:4rem;
  margin-top: 5rem;
  margin-right: 2rem;
  margin-left: 2rem;
  touch-action: pan-y;
  
  }

`

// const Rombos = (props) =>{
//   const 
// return(
//   <div className={styles.rombos}>
//   {sliderProductos.filter(producto=>producto.UltimoPd==true).map((producto,index)=> <StyledRhombus onClick={GiveCurrent(props.firstElement)}/>)}
//   </div>
// )
// }
const CarouselProductos = (props) => {
  // const MyH1 = styled.h1`
  // font-size: 4rem;
  // transition: all s ease-out;
  // &:hover{
    
  //   background-color:#db709380;
  // }
  // `
const OriginalArray = sliderProductos.filter(producto=> producto.UltimoPd==true)
const timeRef = useRef(null);
const [currentIndex, SetCurrentIndex] = useState(0);
// const [initialScale, SetINitialScale] = useState(0);
// const [transition, SetTransition] = useState(false);
const [productosDestacados, SetProductosDestacados] = useState(OriginalArray)
// const [copyOfArray,SetCopy] = useState(productosDestacados);
const DisplayNoContent = {
  visibility: 'hidden',
  display:'none'
}
const displayContent = {
  visibility:'visible',
  display:'block'
}
const Siguiente = useCallback(() => {
  SetProductosDestacados([]);
  const newShifted = productosDestacados.shift();
   const newArray = productosDestacados.concat(newShifted)
   console.log(newArray);
  SetProductosDestacados(newArray);

  // SetINitialScale(initialScale+270)
  // SetTransition(true);

},[productosDestacados])

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
      // SetTransition(false);
  }
  timeRef.current = setTimeout(()=>{
      Siguiente();
      
      // SetSliderStyle(transition1)
      // console.log(productosDestacados)
  },5000)
  return () => clearTimeout(timeRef.current);
},[Siguiente])


  return (
    <div className={styles.SupContainer}>
    <h1>Productos Destacados</h1>
    
    <Container >
     {productosDestacados.slice(0,5).map(producto=>
        <Producto nombreProducto={producto.nombreProducto} url={producto.img} nombre={producto.nombre} precio={producto.precio}/>)}
    </Container>
    <div className={styles.ArrowSliders}>
    <StyledArrowLeft onClick={Anterior}/>
    <div className={styles.rombos}>
        {/* <Rombos firstElement={productosDestacados[0]}/> */}
        {OriginalArray.map((producto,index)=> <StyledRhombus onClick={()=>GiveCurrent(producto,index)}/>)}
        </div>
    <StyledArrowRight onClick={Siguiente}/>
    </div>
    </div>
  )
}

export default CarouselProductos
