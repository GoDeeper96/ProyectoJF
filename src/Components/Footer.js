import React from 'react'
import styles from './Footer.module.css'
import logo_footer from '../img/logo_jyf_footer.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className={styles.Footer_margin_arriba_bloque}>
        <div className={styles.contenedor}> 
         <div className={styles.footer__grid}>
             <div>
                 <img src={logo_footer} alt="logo"/>
                 <p className={styles.footer_p}>Inversiones J & F es una empresa peruana que está conformada por emprendedores especialistas en la industria química con más de 20 años de experiencia, está enfocada en la venta y distribución de productos químicos de calidad al por mayor y al por menor satisfaciendo las necesidades del mercado.</p>
             </div>
 
             <div>
                    <div>
                          {/* <a className={styles.footer__contacto__a} href="contacto.html">Contacto</a> */}
                          <Link to='/contacto' className={styles.footer__contacto__a} >Contacto</Link>
                    </div>
                
                    <div>
                          <Link to='/politicas-de-privacidad' className={styles.footer__contacto__a}>Politicas de privacidad</Link>
                          {/* <a className="footer__contacto__a" href="#">Políticas de privacidad</a> */}
                    </div>
                
                     <div>
                     <Link to='/cambios-y-devoluciones' className={styles.footer__contacto__a}>Cambios y devoluciones</Link>
                           {/* <a className="footer__contacto__a" href="#">Cambios y devoluciones</a>
                   </div> */}</div>
               
                   <div>
                   <Link to='/terminos-y-condiciones' className={styles.footer__contacto__a}>Terminos y condiciones</Link>
                          {/* <a className="footer__contacto__a" href="#">Terminos y condiciones</a> */}
                  </div>
              
                 <div>
                 <Link to='/politicas-de-cookies' className={styles.footer__contacto__a}>Politicas de cookies</Link>
                         {/* <a className="footer__contacto__a" href="#">Politicas de uso de Cookies</a> */}
                 </div>
             
                <div>
                <Link to='/libro-de-reclamaciones' className={styles.footer__contacto__a}>Libro de reclamaciones</Link>
                       {/* <a className="footer__contacto__a" href="#">Libro de reclamciones</a> */}
                 </div>
 
             </div>
 
             <div>
                 <h3 className={styles.footer__telefonos__h3}>Contáctenos</h3>
                 {/* <!-- <p className="footer--p">ventasquimico@inversionesjyfdewjs.com</p> --> */}
                <div className={styles.footer__margin}>
                 <a href="mailto:ventasquimico@inversionesjyfdewjs.com"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                     <rect x="3" y="5" width="18" height="14" rx="2" />
                     <polyline points="3 7 12 13 21 7" />
                   </svg></a>
                  <a className={styles.footer__telefonos__a__email} href="mailto:ventasquimico@inversionesjyfdewjs.com">ventasquimico@inversionesjyfdewjs.com</a>
                 </div>
                 <div className={styles.footer__margin}>
                     <a href="tel:+51946925847"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                         <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                       </svg></a>
                      <a className={styles.footer__telefonos__a} href="tel:+51946925847">946925847</a>
                 </div>
 
                 <div className={styles.footer__margin}>
                     <a href="tel:+51994244459"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phon footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                         <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                         <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                       </svg></a>
                     <a className={styles.footer__telefonos__a} href="tel:+51994244459">994244459</a>
                 </div>
 
                 <div className={styles.footer__margin}>
                  <a  href="tel:+51960113935"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                     <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                   </svg></a>
                   <a className={styles.footer__telefonos__a} href="tel:+51960113935">960113935</a>
                  </div>
                 <div className={styles.footer__margin}>
                  <a href="https://api.whatsapp.com/send?phone=51946925847" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                     <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                     <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                   </svg></a>
                   <a className={styles.footer__telefonos__a} href="https://api.whatsapp.com/send?phone=51946925847" target="_blank">51946925847</a>
                 </div>
 
               <div>
                   <p className={styles.footer_p}>Lunes - Sabado de 08:00 am - 18:00 pm.</p>
                 </div>
 
             </div>
             <div>
                 <h3 className={styles.footer__telefonos__h3}>Síganos</h3>
               <div className={styles.footer__margin}>
                 <a href="https://www.instagram.com/inversionesjyf_/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                     <rect x="4" y="4" width="16" height="16" rx="4" />
                     <circle cx="12" cy="12" r="3" />
                     <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                   </svg></a>
                 <a className={styles.footer__redes__posicion} href="https://www.instagram.com/inversionesjyf_/" target="_blank">Instagram</a>
             </div>
 
             <div className={styles.footer__margin}>
                 <a href="https://www.facebook.com/inversionesjyfdewjs" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook footer__redes--posicion" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                     <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                   </svg></a>
                 <a className={styles.footer__redes__posicion} href="https://www.facebook.com/inversionesjyfdewjs" target="_blank"> Facebook</a>
             </div>
             </div>
         </div>
     </div>
     </div>
  )
}

export default Footer   
