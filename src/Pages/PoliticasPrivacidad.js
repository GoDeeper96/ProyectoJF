import React from 'react'
import './PoliticasPrivacidad.css'
import { Link } from 'react-router-dom'

const PoliticasPrivacidad = () => {
    return(
        <div>
            <div>
            <nav className="navegacion_historial">
                <Link  to='/' className="navegacion_historial__enlace">Inicio</Link>
                <p className="p__navegación_historial_no_margin">{'>'}</p>
                <Link  to='/politicas-de-privacidad' className="navegacion_historial__enlace_activo">Politicas de Privacidad</Link>
           </nav> 
            </div>
            
        <main className="contenedor">
            <h1>Políticas de privacidad</h1>
            <div>
                <p className='texto_tamano'>Por medio del presente documento, Wilmer Julon Salcedo (en adelante, “INVERSIONES J&F”) pone a disposición de los usuarios su Política de Privacidad, la cual se encuentra en armonía con la normativa vigente sobre protección de Datos Personales (Ley N° 29733 y Decreto Supremo 003-2013-JUS). A continuación, se señalan las finalidades de tratamiento de la información que usted nos ha suministrado, quiénes son los encargados de tratar, el tiempo de almacenamiento en nuestras Bases de Datos, las medidas de seguridad, y los medios para ejercer sus derechos como titular de los Datos Personales.</p>
                <h4 className='titulo_posicion'>1. ¿CÓMO PROTEGEMOS SU INFORMACIÓN?</h4>
                <p className='texto_tamano'>INVERSIONES J&F, ha adoptado todas las medidas técnicas, legales y organizacionales necesarias para garantizar la seguridad y el adecuado procesamiento de sus datos personales; así como para evitar cualquier manipulación indebida, pérdida accidental, destrucción o acceso no autorizado de terceros. Hacemos de su conocimiento que su información no será comercializada, transferida ni compartida sin su autorización y para fines ajenos a los que se describen a continuación.</p>
                <h4 className='titulo_posicion'>2. ¿CÓMO ALMACENAMOS Y PARA QUÉ FINALIDAD UTILIZAMOS SU INFORMACIÓN?</h4>
                <p className='texto_tamano'>INVERSIONES J&F recopila datos personales de las diversas secciones de su Sitio Web, formularios físicos, fuentes de acceso público y privado. A continuación, se precisan las características de cada procesamiento de información:</p>
                <ol>
                    <li className='texto_tamano' value="1">Para el caso de las secciones “Crear Cuenta” y “Envío y Pago”, los datos personales serán almacenados en el banco de datos de “Clientes” (Código N° 2849). Así mismo, las finalidades de tratamiento son: (i) Procesar la compra realizada en virtud del contrato de consumo suscrito con INVERSIONES J&F; (ii) Establecer un canal de comunicación con INVERSIONES J&F para informarle respecto del envío del producto adquirido u otras condiciones relacionadas a la relación contractual que subsiste con INVERSIONES J&F; (iii) Verificar su información al momento de realizar la entrega del producto para confirmar su titularidad; (iv) Realizar acciones de cobranza; (v) Incorpórase en el registro de INVERSIONES J&F para fines estadísticos e históricos; (vi) Establecer un medio de comunicación para atender sus consultas, preguntas, quejas y reclamos; (vii) en caso lo autorice expresamente, remitir promociones, beneficios, concursos, ofertas y, en general, publicidad sobre productos y servicios, así como obtener información de fuentes de acceso públicas y privadas para fines de perfilamiento.
                    Para poder remitirle información de tipo publicitaria y realizar acciones de perfilamiento, usted deberá otorgarnos su autorización expresa por medio de los check box implementados en nuestras secciones web, dado que, sin su autorización, INVERSIONES J&F se abstendrá de enviar este tipo de comunicación.</li>
                    <li className='texto_tamano'>Para el caso de la sección “Suscríbete”, los datos personales serán almacenados en el banco de datos de “Usuarios Web” (Código N° 2848). Así mismo, las finalidades de tratamiento son: (i) Remitir revistas informativas, promociones, beneficios, concursos, ofertas y, en general, publicidad sobre productos y servicios; (ii) Obtener información de fuentes de acceso públicas y privadas para fines de perfilamiento y prospección comercial.</li>
                    <li className='texto_tamano'>Para el caso de la sección “Libro de Reclamaciones”, los datos personales serán almacenados en el banco de datos de “Clientes” (Código N°2849). Así mismo, las finalidades de tratamiento son: (i) Establecer un medio de comunicación para atender sus consultas, preguntas, quejas y reclamos; y, (ii) llevar un registro de las quejas y reclamos con el propósito de cumplir con las normas de protección al consumidor.</li>
                    
                </ol>
                <h4 className='titulo_posicion'>3. ¿POR CUÁNTO TIEMPO ALMACENAMOS LA INFORMACIÓN?</h4>
                <p className='texto_tamano'>Es importante señalar que el plazo de almacenamiento de todos los bancos de datos es indeterminado o hasta que el titular de datos personales ejerza algunos de los derechos previstos en la normativa de protección de datos personales.</p>
                <h4 className='titulo_posicion'>4. ¿QUIÉN TIENE ACCESO A SU INFORMACIÓN?</h4>
                <p className='texto_tamano'>Usted nos autoriza a que podamos compartir y encargar el tratamiento de su información personal con terceros que nos prestan servicios para mejorar nuestras actividades. En estos casos, garantizará que el tratamiento de sus datos se limite a las finalidades antes autorizadas y que se mantenga confidencialidad y se implementen las medidas de seguridad adecuadas.
                El listado con la información de los terceros encargados de tratamiento de INVERSIONES J&F se encuentra en el anexo de la presente política.</p>
                <h4 className='titulo_posicion'>5. ¿CÓMO PUEDE EJERCER SUS DERECHOS COMO TITULAR DE DATOS PERSONALES?</h4>
                <p className='texto_tamano'>INVERSIONES J&F reconoce y garantiza el ejercicio de los derechos de acceso, rectificación, cancelación, oposición, información o revocación que por ley le asisten. Para ejercer los derechos antes mencionados presentar una solicitud al correo electrónico ventasquimico@inversionesjyfdewjs.com con el asunto “Derechos Datos Personales”.
                En caso, considera que no ha sido atendido, podrá presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales, dirigiéndose a la Mesa de Partes del Ministerio de Justicia y Derechos Humanos ubicado en Calle Scipión Llona N° 350, Miraflores, Lima, Perú.</p>
                <h4 className='titulo_posicion'>6. ACTUALIZACIONES DE LA PRESENTE POLÍTICA DE PRIVACIDAD</h4>
                <p className='texto_tamano'>Con motivo de la mejora continua de nuestros procesos, INVERSIONES J&F podrá realizar correcciones y actualizaciones a esta Política de Privacidad. Por favor, verifique estos términos regularmente para consultar los cambios que puedan haber existido y de qué manera le pueden afectar.</p>
            </div>
        </main>
        
        </div>
    )

}

export default PoliticasPrivacidad;