import React, {useState,useRef, useEffect,useCallback} from 'react'
import  styles  from './NoticiasPosteo.module.css';
import NoticiaContenido from '../Components/NoticiaContenido';
import Footer from '../Components/Footer';
const NoticiasPosteo = () =>{

    return (
        <>
        <NoticiaContenido/>
        <Footer/>
        </>
      )
}

export default NoticiasPosteo;