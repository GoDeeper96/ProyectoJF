import React, {useState,useRef, useEffect,useCallback} from 'react'
import  styles  from './Home.module.css';
import slider1 from '../img/slider1_index.png'
import slider2 from '../img/slider2_index.jpg'
import slider3 from '../img/slider3_index.jpg'
import slider4 from '../img/slider4_index.jpg'
import sliderServicios1 from '../img/slider_servicios1.JPG'
import sliderServicios2 from '../img/slider_servicios2.JPG'
import sliderServicios3 from '../img/slider_servicios3.JPG'
import sliderServicios4 from '../img/slider_servicios4.JPG'
import sliderServicios5 from '../img/slider_servicios5.JPG'
import banner1 from '../img/banner1.jpg'
import banner2 from '../img/banner2.jpg'
import banner3 from '../img/banner3.jpg'
import banner4 from '../img/banner4.jpg'
import banner5 from '../img/banner5.jpg'
import banner6 from '../img/banner6.jpg'
import banner7 from '../img/banner7.jpg'
import banner8 from '../img/banner8.jpg'
import banner9 from '../img/banner9.jpg'
const Home = () => {
  const banners = [
    {img:banner1},
    {img:banner2},
    {img:banner3},
    {img:banner4},
    {img:banner5},
    {img:banner6},
    {img:banner7},
    {img:banner8},
    {img:banner9},
  ]
  const sliderImages = [
    {img:slider1},
    {img:slider2},
    {img:slider3},
    {img:slider4},
  ]  
  const sliderServicios = [
    {img:sliderServicios1},
    {img:sliderServicios2},
    {img:sliderServicios3},
    {img:sliderServicios4},
    {img:sliderServicios5},
  ]
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
    <section className={styles.contenedor__slider}>
        <div className={styles.slider}>
            <div className={styles.slider__section}>
                <img src={sliderImages[currentIndex].img} alt={`img${currentIndex+1}`} className={styles.slider__img}/>
            </div>
        </div>
        <div className={styles.slider__btn} style={btnRightStyle} onClick={Siguiente}>{rightArrow}</div>
        <div className={styles.slider__btn} style={btnLeftStyle} onClick={Anterior}>{leftArrow}</div>
    </section>
            <div className={styles.slider__section_servicios}>
                <img src={sliderServicios[currentIndex].img} alt={`imgServicios${currentIndex+1}`} className={styles.slider__img_servicios}/>
            </div>
       <div>
       <h1>Secciones</h1>
        <div className={styles.grid__margin_lado_bloques}>
            <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner1} alt="Agroindustria"/>
                </a>
            </div>
             <div>
                  <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner2} alt="Cosmetica"/>
                  </a>
            </div>

            <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner3} alt="Co"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner4} alt="Reciclaje"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner5} alt="Industria textil"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner6} alt="Minera"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner7} alt="Producto de limpieza"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner8} alt="Reactivos quimicos"/>
                </a>
             </div>

             <div>
                <a href="catalago.html">
                    <img className={styles.catalogo__imagen} src={banner9} alt="Tratamiento de agua"/>
                </a>
             </div>

        </div>
       </div>
    
    {/* <section class="contenedor__slider_responsive">
        <div class="slider_responsive" id="slider_responsive">

            <div class="slider__section_responsive">
                <img src="img/slider1_index_responsive.png" alt="slider1_responsive" class="slider__img_responsive"/>
            </div>

            <div class="slider__section_responsive">
                <img src="img/slider2_index_responsive.jpg" alt="slider2_responsive" class="slider__img_responsive"/>
            </div>

            <div class="slider__section_responsive">
                <img src="img/slider3_index_responsive.jpg" alt="slider3_responsive" class="slider__img_responsive"/>
            </div>
    
            <div class="slider__section_responsive">
                <img src="img/slider4_index_responsive.jpg" alt="slider4_responsive" class="slider__img_responsive"/>
            </div>
        </div>
        <div class="slider__btn_responsive slider__btn--right_responsive" id="btn__right_responsive">&#62</div>
        <div class="slider__btn_responsive slider__btn--left_responsive" id="btn__left_responsive">&#60</div>
    </section>
    <section class="contenedor__servicios">
        <div class="slider__servicios" id="slider__servicios">

            <div class="slider__section_servicios">
                <img src="img/slider_servicios1.JPG" alt="slider1" class="slider__img_servicios"/>
            </div>

            <div class="slider__section_servicios">
                <img src="img/slider_servicios2.JPG" alt="slider2" class="slider__img_servicios"/>
            </div>

            <div class="slider__section_servicios">
                <img src="img/slider_servicios3.JPG" alt="slider3" class="slider__img_servicios"/>
            </div>
    
            <div class="slider__section_servicios">
                <img src="img/slider_servicios4.JPG" alt="slider4" class="slider__img_servicios"/>
            </div>

            <div class="slider__section_servicios">
                <img src="img/slider_servicios5.JPG" alt="slider5" class="slider__img_servicios"/>
            </div>

        </div>
    </section>
    <section class="contenedor__servicios_responsive_cell">
        <div class="slider__servicios_responsive_cell" id="slider_servicios_responsive_cell">

            <div class="slider__section_servicios_responsive_cell">
                <img src="img/slider_servicios_responsivecell1.JPG" alt="slider1" class="slider__img_servicios_responsive_cell"/>
            </div>

            <div class="slider__section_servicios_responsive_cell">
                <img src="img/slider_servicios_responsivecell2.JPG" alt="slider2" class="slider__img_servicios_responsive_cell"/>
            </div>

            <div class="slider__section_servicios_responsive_cell">
                <img src="img/slider_servicios_responsivecell3.JPG" alt="slider3" class="slider__img_servicios_responsive_cell"/>
            </div>
    
            <div class="slider__section_servicios_responsive_cell">
                <img src="img/slider_servicios_responsivecell4.JPG" alt="slider4" class="slider__img_servicios_responsive_cell"/>
            </div>

            <div class="slider__section_servicios_responsive_cell">
                <img src="img/slider_servicios_responsivecell5.JPG" alt="slider5" class="slider__img_servicios_responsive_cell"/>
            </div>

        </div>
    </section>
    <section>
        <div class="social-bar">

            <a href="https://www.facebook.com/profile.php?id=100087857246046" class="icon__redes icon-facebook" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg></a>

          <a href="https://www.instagram.com/inversionesjyf_/?__coig_restricted=1" class="icon__redes icon-instagram" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg></a>
          
          <a href="https://wa.me/message/Q6YJLUBS7JQYF1" class="icon__redes icon-whatsapp" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
          </svg></a>
        </div>
    </section>

    <main class="contenedor">
        <h1>Secciones</h1>
        <div class="grid margin--lados_bloques">
            <div class="catalago catalago--banner1">
                <a href="catalago.html">
                    <img class="catalago__imagen" src="img/banner1.jpg" alt="Agroindustria"/>
                </a>
            </div>
             <div class="catalago catalago--banner2">
                  <a href="catalago.html">
                    <img class="catalago__imagen" src="img/banner2.jpg" alt="Cosmetica"/>
                  </a>
            </div>

            <div class="catalago catalago--banner3">
                <a href="catalago.html">
                    <img class="catalago__imagen" src="img/banner3.jpg" alt="Co"/>
                </a>
             </div>

             <div class="catalago catalago--banner4">
                <a href="catalago.html">
                    <img class="catalago__imagen" src="img/banner4.jpg" alt="Reciclaje"/>
                </a>
             </div>

             <div class="catalago catalago--banner5">
                <a href="catalago.html">
                    <img class="catalago__imagen" src="img/banner5.jpg" alt="Industria textil"/>
                </a>
             </div>

             <div class="catalago catalago--banner6">
                <a href="catalago.html">
                    <img class="catalago__imagen" src="img/banner6.jpg" alt="Minera"/>
                </a>
             </div>

             <div class="catalago catalago--banner7">
                <a href="catalago.html">
                    <img class="catalago__imagen" src="img/banner7.jpg" alt="Producto de limpieza"/>
                </a>
             </div>

             <div class="catalago catalago--banner8">
                <a href="catalago.html">
                    <img class="catalago__imagen" src="img/banner8.jpg" alt="Reactivos quimicos"/>
                </a>
             </div>

             <div class="catalago catalago--banner9">
                <a href="catalago.html">
                    <img class="catalago__imagen" src="img/banner9.jpg" alt="Tratamiento de agua"/>
                </a>
             </div>

        </div>
    </main>

    <footer class="footer margin-arriba_bloque">
       <div class="contenedor"> 
        <div class="footer__grid">
            <div>
                <img src="img/logo_jyf_footer.png" alt="logo"/>
                <p class="footer--p">Inversiones J & F es una empresa peruana que está conformada por emprendedores especialistas en la industria química con más de 20 años de experiencia, está enfocada en la venta y distribución de productos químicos de calidad al por mayor y al por menor satisfaciendo las necesidades del mercado.</p>
            </div>

            <div>
                   <div>
                         <a class="footer__contacto__a" href="contacto.html">Contacto</a>
                   </div>
               
                   <div>
                         <a class="footer__contacto__a" href="#">Políticas de privacidad</a>
                   </div>
               
                    <div>
                          <a class="footer__contacto__a" href="#">Cambios y devoluciones</a>
                  </div>
              
                  <div>
                         <a class="footer__contacto__a" href="#">Terminos y condiciones</a>
                 </div>
             
                <div>
                        <a class="footer__contacto__a" href="#">Politicas de uso de Cookies</a>
                </div>
            
               <div>
                      <a class="footer__contacto__a" href="#">Libro de reclamciones</a>
                </div>

            </div>

            <div>
                <h3 class="footer__telefonos--h3">Contáctenos</h3>
             
               <div class="footer--margin">
                <a href="mailto:ventasquimico@inversionesjyfdewjs.com"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <polyline points="3 7 12 13 21 7" />
                  </svg></a>
                 <a class="footer__telefonos--a--email " href="mailto:ventasquimico@inversionesjyfdewjs.com">ventasquimico@inversionesjyfdewjs.com</a>
                </div>
                <div class="footer--margin">
                    <a href="tel:+51946925847"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg></a>
                     <a class="footer__telefonos--a" href="tel:+51946925847">946925847</a>
                </div>

                <div class="footer--margin">
                    <a href="tel:+51994244459"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phon footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                      </svg></a>
                    <a class="footer__telefonos--a" href="tel:+51994244459">994244459</a>
                </div>

                <div class="footer--margin">
                 <a  href="tel:+51960113935"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  </svg></a>
                  <a class="footer__telefonos--a" href="tel:+51960113935">960113935</a>
                 </div>
                <div class="footer--margin">
                 <a href="https://api.whatsapp.com/send?phone=51946925847" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                  </svg></a>
                  <a class="footer__telefonos--a" href="https://api.whatsapp.com/send?phone=51946925847" target="_blank">51946925847</a>
                </div>

              <div>
                  <p class="footer--p">Lunes - Sabado de 08:00 am - 18:00 pm.</p>
                </div>

            </div>
            <div>
                <h3 class="footer__redes--h3">Síganos</h3>
              <div class="footer--margin">
                <a href="https://www.instagram.com/inversionesjyf_/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg></a>
                <a class="footer__redes--a .footer__redes--posicion" href="https://www.instagram.com/inversionesjyf_/" target="_blank">Instagram</a>
            </div>

            <div class="footer--margin">
                <a href="https://www.facebook.com/inversionesjyfdewjs" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg></a>
                <a class="footer__redes--a .footer__redes--posicion" href="https://www.facebook.com/inversionesjyfdewjs" target="_blank"> Facebook</a>
            </div>
            </div>
        </div>
    </div>
    </footer> */}
    </>
  )
}

export default Home;
