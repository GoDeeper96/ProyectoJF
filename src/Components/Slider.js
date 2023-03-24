import React from 'react'
import styled from 'styled-components'
const Slider = (props) => {
  const SliderImage = styled.img`
    display: block;
    width: ${props=>props.ImageWidth}px;

    height: 100%;
    object-fit: cover;`  
  return (
    <SliderImage src={props.ImageUrl} ImageWidth={props.ImageWidth}/>
  )
}

export default Slider
