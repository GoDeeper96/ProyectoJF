import React, {useState,useRef, useEffect,useCallback} from 'react'
import  styles  from './Noticias.module.css';
import Noticia from '../Components/Noticia';
import Footer from '../Components/Footer';
const Noticias = () =>{

    return (
        <>
        <Noticia/>
        <Footer/>
        </>
      )
}

export default Noticias;