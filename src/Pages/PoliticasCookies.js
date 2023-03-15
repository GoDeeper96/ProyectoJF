import React from 'react'
import './PoliticasCookies.css'
import { Link } from 'react-router-dom'

const PoliticasCookies = () => {
    return(
        <div>
            <div>
                <nav className="navegacion_historial">
                    <Link  to='/' className="navegacion_historial__enlace">Inicio</Link>
                    <p className="p__navegación_historial_no_margin">{'>'}</p>
                    <Link  to='/politicas-de-cookies' className="navegacion_historial__enlace_activo">Políticas de Cookies</Link>
                </nav> 
            </div>

            <main className="contenedor">
                <h1>Políticas de Cookies</h1>
                <p className='texto_tamano'>Wilmer Julon Salcedo., (en adelante, “INVERSIONES J & F”) debidamente identificada con RUC N° 10092978759, pone a disposición de todos nuestros clientes o usuarios web este documento el cual contiene nuestra Política de Cookies, la cual regula el sitio web con URL https://inversionesjys.jumpseller.com/ (en adelante, el “Sitio Web”), con el objetivo de garantizar la privacidad de los clientes o usuarios web, en adelante el “Usuario”.</p>
                <p className='texto_tamano'>Informamos al Usuario que en el Sitio Web utilizamos cookies, tanto propias como de terceros. Estas cookies nos permiten facilitar el uso y navegación, garantizar el acceso a determinadas funcionalidades y adicionalmente, nos ayudan a mejorar la calidad del sitio Web de acuerdo con los hábitos y estilos de navegación del Usuario.</p>
                <h4 className='titulo_posicion'>1. ¿Qué son las cookies?</h4>
                <p className='texto_tamano'>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
                <h4 className='titulo_posicion'>2. ¿Cuál es el uso de las cookies?</h4>
                <p className='texto_tamano'>Las cookies sirven para reconocer el dispositivo del Usuario cuando vuelve a visitar el Sitio Web, facilitándole su uso recordando sus preferencias y configuración de navegación (p. ej. Idioma, país, etc.).</p>
                <p className='texto_tamano'>También sirven para mejorar los servicios que ofrecemos y para poder recopilar información estadística que nos permite entender cómo los Clientes o usuarios utilizan nuestro Web y nos ayudan a mejorar su estructura y contenidos.</p>
                <p className='texto_tamano'>Algunas cookies son estrictamente necesarias para que el Sitio Web funcione correctamente y otras sirven para mejorar el rendimiento y su experiencia como usuario, así como para las funcionalidades propias de marketing.</p>
                <p className='texto_tamano'>Las cookies se asocian únicamente a un Usuario anónimo y su dispositivo de acceso a Internet y, normalmente, no proporcionan referencias que permitan deducir datos personales del Usuario. Las cookies no pueden dañar su dispositivo y además son muy útiles, puesto que nos ayudan a identificar y resolver errores. Sin perjuicio de ello, algunas cookies pueden contener información personal.</p>
                <p className='texto_tamano'>El Usuario podrá encontrar la información respecto de las cookies implementadas por INVERSIONES J&F, en el Anexo de la presente Política.</p>
                <h4 className='titulo_posicion'>3. ¿Se pueden eliminar las cookies?</h4>
                <p className='texto_tamano'>Sí. No sólo eliminar, también bloquear, de forma general o particular para un dominio específico. Para eliminar las cookies de un sitio web debe ir a la configuración de su navegador y allí podrá buscar las asociadas al dominio en cuestión y proceder a su eliminación.</p>
                <p className='texto_tamano'>Para bloquear o deshabilitar las cookies el Usuario deberá activar la configuración del navegador, de manera que se rechace la instalación de todas las cookies o de algunas de ellas. En la práctica la mayoría de los navegadores permiten advertir la presencia de cookies o rechazarlas automáticamente. Si son rechazadas se podrá seguir usando nuestro Web, aunque el uso de algunos de sus servicios podrá ser limitado y por tanto la experiencia del usuario puede ser menos satisfactoria.</p>
                <h4 className='titulo_posicion'>4. ¿Cómo se gestionan las cookies?</h4>
                <p className='texto_tamano'>Proporcionando esta política, INVERSIONES J&F expone al Usuario el compromiso adquirido sobre el uso de cookies, dándole acceso a información para que el Usuario pueda comprender qué tipo de cookies utilizamos y por qué lo hacemos. Con esto, pretendemos proporcionarle transparencia en cuanto a los datos tratados acerca de la navegación realizada desde su equipo en el Sitio Web.</p>
                <p className='texto_tamano'>Si acepta las cookies, nos permite la mejora del sitio Web de INVERSIONES J&F para ofrecerle un acceso óptimo y darle un servicio más eficaz y personalizado. Además, el Usuario puede configurar su navegador para establecer que sólo los sitios Web de confianza o las páginas por las que está navegando en este momento puedan gestionar cookies lo que le permite seleccionar sus preferencias.</p>
                <p className='texto_tamano'>Si el Usuario decide no autorizar el tratamiento indicándonos su no conformidad, sólo usaríamos las cookies necesarias, puesto que son imprescindibles para la navegación por nuestro Web. En este caso, no almacenaríamos ninguna cookie. En el caso de seguir navegando por nuestro sitio Web sin denegar su autorización implica que acepta su uso.</p>
                <p className='texto_tamano'>Tenga en cuenta que, si rechaza o borra las cookies de navegación por el sitio Web, no podremos mantener sus preferencias, algunas características de las páginas no estarán operativas, no podremos ofrecerle servicios personalizados y cada vez que vaya a navegar por nuestra Web tendremos que solicitarle de nuevo su autorización para el uso de cookies.</p>
                <p className='texto_tamano'>Si, aún así, decide modificar la configuración de su acceso al sitio Web, debe saber que es posible eliminar las cookies o impedir que se registre esta información en su equipo en cualquier momento mediante la modificación de los parámetros de configuración de su navegador.</p>
                <h4 className='titulo_posicion'>5. Protección de datos personales</h4>
                <p className='texto_tamano'>En el supuesto que INVERSIONES J&F pueda recopilar datos personales, estos se almacenarán en el banco de datos denominado “Clientes” (RNPDP N° 2849), por un plazo indeterminado para: (i) llevar un registro para fines estadísticos e históricos; (ii) obtener información de fuentes de acceso públicas y privadas para fines de perfilamiento; y, (iii) remitir promociones, beneficios, concursos, ofertas y, en general, publicidad sobre productos y servicios INVERSIONES J&F.</p>
                <p className='texto_tamano'>Asimismo, se le comunica que INVERSIONES J&F podrá compartir y encargar el tratamiento de sus datos personales a organización o personas directamente relacionadas, empresas prestadoras de servicios en la nube y empresas dedicadas a la publicidad o marketing.</p>
                <p className='texto_tamano'>Se deja constancia que: (i) el detalle de los terceros con acceso a los datos personales y cualquier variación de estos será actualizada en la Política de Privacidad General ubicada en nuestro Sitio Web; (ii) la autorización del Usuario es necesaria para cumplir con las finalidades antes indicadas; y, (iii) se podrá ejercer los derechos previstos en la Ley N° 29733, presentando una solicitud en la dirección de correo a ventasquimico@inversionesjyfdewjs.com.</p>
                <p className='texto_tamano'>En caso, considere que no ha sido atendido, podrá presentar una reclamación ante la Autoridad Nacional de Protección de Datos Personales, dirigiéndose a la Mesa de Partes del Ministerio de Justicia y Derechos Humanos ubicado en Calle Scipión Llona N° 350, Miraflores, Lima, Perú.</p>
                <h4 className='titulo_posicion'>6. Vigencia y modificación de la Política de Cookies</h4>
                <p className='texto_tamano'>INVERSIONES J&F puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, jurisprudenciales o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Autoridad Nacional de Protección de Datos Personales, así como por criterios propios empresariales.</p>
                <p className='texto_tamano'>Por ello, y dado que dicha política puede ser actualizada periódicamente, sugerimos a nuestros usuarios que la revisen de forma regular y que la encontrarán en el sitio Web.</p>
                <h4 className='titulo_posicion tamano_gigante'>MATRIZ DE COOKIES</h4>
                <p className='texto_tamano'>Denominación: _ga</p>
                <p className='texto_tamano'>Funcionabilidad: Google Analytics es la herramienta de análisis de Google que ayuda a los propietarios de sitios web y de aplicaciones a entender cómo interactúan los visitantes con sus propiedades. Esta herramienta puede utilizar un conjunto de cookies para recoger información y ofrecer estadísticas de uso de los sitios web sin identificar personalmente a Google los visitantes de las mismas. La principal cookie que utiliza Google Analytics es '_ga'. Además de para ofrecer estadísticas de uso de los sitios web, los datos que Google Analytics recoge en las propiedades de Google también se pueden utilizar junto con algunas de las cookies publicitarias para mostrar anuncios más relevantes en las propiedades de Google (p. ej., en el buscador de Google) y en toda la Web y para medir las interacciones con los anuncios que se muestran.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Estádistica</p>
                <p className='texto_tamano'>Denominación: __gads</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie habilitada el dominio del sitio web que estés visitando. A diferencia de lo que sucede con las cookies habilitadas en los propios dominios de Google, Google no puede leer estas cookies cuando estás en un sitio web distinto del sitio en que se han configurado. Sus funciones consisten, entre otras cosas, en medir las interacciones con los anuncios incluidos en ese dominio y evitar que se te muestre la misma publicidad demasiadas veces.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Estádistica</p>
                <p className='texto_tamano'>Denominación: _gcl_aw</p>
                <p className='texto_tamano'>Funcionabilidad: Google también usa cookies de conversión (por ejemplo, las denominadas '__gcl'), cuyo objetivo principal es ayudar a los anunciantes a determinar cuántas de las personas que hacen clic en sus anuncios acaban haciendo una acción en su sitio web (por ejemplo, comprar un artículo). Estas cookies permiten a Google y al anunciante determinar que has hecho clic en el anuncio y que has accedido posteriormente al sitio web del anunciante. Las cookies de conversión solo duran un periodo limitado y Google no las utiliza para targetizar los anuncios personalizados. También se pueden utilizar algunas de las demás cookies para medir eventos de conversión. Por ejemplo, las cookies de Google Marketing Platform y Google Analytics también se pueden usar para esta finalidad.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Estádistica</p>
                <p className='texto_tamano'>Denominación: _gcl_au</p>
                <p className='texto_tamano'>Funcionabilidad: Google también usa cookies de conversión (por ejemplo, las denominadas '__gcl'), cuyo objetivo principal es ayudar a los anunciantes a determinar cuántas de las personas que hacen clic en sus anuncios acaban haciendo una acción en su sitio web (por ejemplo, comprar un artículo). Estas cookies permiten a Google y al anunciante determinar que has hecho clic en el anuncio y que has accedido posteriormente al sitio web del anunciante. Las cookies de conversión solo duran un periodo limitado y Google no las utiliza para targetizar los anuncios personalizados. También se pueden utilizar algunas de las demás cookies para medir eventos de conversión. Por ejemplo, las cookies de Google Marketing Platform y Google Analytics también se pueden usar para esta finalidad.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Estádistica</p>
                <p className='texto_tamano'>Denominación: dsid</p>
                <p className='texto_tamano'>Funcionabilidad: Estas cookies también se pueden utilizar en otras propiedades de Google (p. ej., en YouTube) para mostrarte anuncios más relevantes.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: ANID</p>
                <p className='texto_tamano'>Funcionabilidad: Utilizamos cookies para hacer que la publicidad sea más atractiva para los usuarios y más valiosa para los editores y anunciantes. Las cookies suelen utilizarse para seleccionar anuncios basados en contenido que es relevante para un usuario, mejorar los informes de rendimiento de la campaña y evitar mostrar anuncios que el usuario ya haya visto. La cookie ANID se almacena en google.com</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: APISID</p>
                <p className='texto_tamano'>Funcionabilidad: Cookies utilizadas por Google para mostrar anuncios personalizados en sitios de Google basado en búsquedas e interacciones recientes. Adicionalmente, las cookies HSID, SSID, APISID y SAPISID le permiten a Google recolectar información del usuario para videos hosteados en YouTube.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: HSID</p>
                <p className='texto_tamano'>Funcionabilidad: Las cookies HSID, SSID, APISID y SAPISID le permiten a Google recolectar información del usuario para videos hosteados en YouTube.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: SAPISID</p>
                <p className='texto_tamano'>Funcionabilidad: Las cookies HSID, SSID, APISID y SAPISID le permiten a Google recolectar información del usuario para videos hosteados en YouTube.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: 1P_JAR</p>
                <p className='texto_tamano'>Funcionabilidad: Cookies utilizadas por Google para mostrar anuncios personalizados en sitios de Google basado en búsquedas e interacciones recientes.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: NID</p>
                <p className='texto_tamano'>Funcionabilidad: Estas cookies permiten que nuestros sitios web recuerden información que cambia el aspecto o el comportamiento del sitio web como, por ejemplo, el idioma que prefieres o la región en la que te encuentras. Por ejemplo, al recordar tu región, un sitio web puede proporcionarte noticias sobre el tráfico o boletines meteorológicos locales. Estas cookies también te permiten cambiar el tamaño del texto, la fuente y otras partes de las páginas web que puedes personalizar. La pérdida de la información almacenada en una cookie de preferencias puede hacer que la experiencia del sitio web sea menos funcional, pero no debe afectar a su funcionamiento. La mayoría de los usuarios de Google tienen habilitada en sus navegadores una cookie de preferencias denominada 'NID'. Un navegador envía esta cookie a través de solicitudes a los sitios web de Google. La cookie NID contiene un ID único que Google utiliza para recordar tus preferencias y otra información, como tu idioma preferido (por ejemplo, el español), el número de resultados de búsqueda que quieres que se muestren por página (por ejemplo, 10 o 20) y si quieres que el filtro SafeSearch de Google esté activado o desactivado.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: SID</p>
                <p className='texto_tamano'>Funcionabilidad: Utilizamos cookies de seguridad para autenticar a usuarios, evitar el uso fraudulento de credenciales de inicio de sesión y proteger los datos de usuarios frente a terceros no autorizados. Por ejemplo, utilizamos cookies denominadas 'SID' y 'HSID' que contienen registros encriptados y firmados de forma digital de la hora de inicio de sesión más reciente y del ID de cuenta de Google de un usuario. La combinación de estas dos cookies nos permite bloquear muchos tipos de ataques como, por ejemplo, intentos de robo del contenido de los formularios que rellenas en páginas web.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: SSID</p>
                <p className='texto_tamano'>Funcionabilidad: Las cookies HSID, SSID, APISID y SAPISID le permiten a Google recolectar información del usuario para videos hosteados en YouTube.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: SIDCC</p>
                <p className='texto_tamano'>Funcionabilidad: Esta cookie lleva a cabo información sobre cómo el usuario final utiliza el sitio web y cualquier publicidad que el usuario final haya visto antes de visitar dicho sitio web.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Estadística</p>
                <p className='texto_tamano'>Denominación: xs</p>
                <p className='texto_tamano'>Funcionabilidad: Esta cookie contiene varias piezas de información, separadas por dos puntos (los dos puntos están codificados con el valor% 3A para su transmisión). El primer valor es un número de hasta dos dígitos que representa el número de sesión. La segunda parte del valor es un secreto de sesión. El tercer componente opcional es un indicador 'seguro' para si el usuario ha habilitado la función de navegación segura. La duración de esta cookie depende del estado de la casilla de verificación 'mantenerme conectado'. Si la casilla de verificación 'mantenerme conectado' está activada, la cookie caduca después de 90 días de inactividad. Si la casilla de verificación 'mantenerme conectado' no está configurada, la cookie es una cookie de sesión.</p>
                <p className='texto_tamano'>Caducidad: 90 días</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: wd</p>
                <p className='texto_tamano'>Funcionabilidad: Esta cookie almacena las dimensiones de la ventana del navegador y Facebook la utiliza para optimizar la representación de la página. La cookie wd es una cookie de sesión. Enviar solo por HTTPS Dominio ={'>'} “.facebook.com” Caduca en 1 semana desde el momento de la creación.</p>
                <p className='texto_tamano'>Caducidad: 7 días</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: presence</p>
                <p className='texto_tamano'>Funcionabilidad: La cookie de presencia se utiliza para contener el estado de chat del usuario. Por ejemplo, qué pestañas de chat están abiertas. Esta cookie es una cookie de sesión. Enviar solo por HTTP Dominio ={'>'} “.facebook.com” Caduca cuando finaliza la sesión del navegador.</p>
                <p className='texto_tamano'>Caducidad: Al finalizar la sesión de navegación</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: c_user</p>
                <p className='texto_tamano'>Funcionabilidad: La cookie c_user contiene el ID de usuario del usuario actualmente conectado. La duración de esta cookie depende del estado de la casilla de verificación 'mantenerme conectado'. Si la casilla de verificación 'mantenerme conectado' está activada, la cookie caduca después de 90 días de inactividad. Si la casilla de verificación 'mantenerme conectado' no está configurada, la cookie es una cookie de sesión y, por lo tanto, se borrará cuando se cierre el navegador. Enviar solo por HTTPS Dominio ={'>'} “.facebook.com” Caduca aproximadamente en 3 meses a partir de la fecha de creación (si está configurada la opción Recordarme) / Caduca cuando finaliza la sesión del navegador.</p>
                <p className='texto_tamano'>Caducidad: 90 días</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: datr</p>
                <p className='texto_tamano'>Funcionabilidad: El propósito de la cookie datr es identificar el navegador web que se utiliza para conectarse a Facebook independientemente del usuario que haya iniciado sesión. Esta cookie juega un papel clave en las funciones de seguridad e integridad del sitio de Facebook. El código de generación y configuración de la cookie datr ha sido revisado y se ha confirmado que la ruta de ejecución seguida en el caso de una solicitud de contenido de complemento social no establece la cookie 'datr'. La vida útil de la cookie 'datr' es actualmente de dos años. Esta es una cookie persistente.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: IDE</p>
                <p className='texto_tamano'>Funcionabilidad: Utilizamos cookies para hacer que la publicidad sea más atractiva para los usuarios y más valiosa para los editores y anunciantes. Las cookies suelen utilizarse para seleccionar anuncios basados en contenido que es relevante para un usuario, mejorar los informes de rendimiento de la campaña y evitar mostrar anuncios que el usuario ya haya visto. También utilizamos una o más cookies para los anuncios que mostramos en toda la Web. Una de nuestras principales cookies de publicidad en los sitios web que no pertenecen a Google se denomina 'IDE' y se almacena en navegadores en el dominio doubleclick.net.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Mkt</p>
                <p className='texto_tamano'>Denominación: _hjAbsoluteSessionInProgress</p>
                <p className='texto_tamano'>Funcionabilidad: Esta cookie se utiliza para detectar la primera sesión de vista de página de un usuario. Este es un indicador de Verdadero / Falso establecido por la cookie.</p>
                <p className='texto_tamano'>Caducidad: 30 minutos</p>
                <p className='texto_tamano'>Tipo de Cookie: Estadística</p>
                <p className='texto_tamano'>Denominación: _hjIncludedInPageviewSample</p>
                <p className='texto_tamano'>Funcionabilidad: Esta cookie está configurada para que Hotjar sepa si ese visitante está incluido en el muestreo de datos definido por el límite de visitas a la página de su sitio.</p>
                <p className='texto_tamano'>Caducidad: 30 minutos</p>
                <p className='texto_tamano'>Tipo de Cookie: Estadística</p>
                <p className='texto_tamano'>Denominación: vtexfingerprint</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie que recolecta información anónima para dimensionar el tamaño y tiempo de respuesta de los servidores y mejorar la navegación</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: vtexRCMacfdv7</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie que recolecta información anónima para dimensionar el tamaño y tiempo de respuesta de los servidores y mejorar la navegación.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: VtexRcRequestCounter</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie que recolecta información anónima para dimensionar el tamaño y tiempo de respuesta de los servidores y mejorar la navegación.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: VtexRCSessionidV7</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie que recolecta información anónima para dimensionar el tamaño y tiempo de respuesta de los servidores y mejorar la navegación.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: checkout.vtex.com</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie que recolecta y guarda información referida a la compra en el checkout.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: ISSMB</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie de seguridad necesaria para el funcionamiento básico del sitio.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: IPS</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie de seguridad necesaria para el funcionamiento básico del sitio.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: ISS</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie de seguridad necesaria para el funcionamiento básico del sitio.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: VTEXSC</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie de seguridad necesaria para el funcionamiento básico del sitio</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: SGTP</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie de seguridad necesaria para el funcionamiento básico del sitio.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: SGTS</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie de seguridad necesaria para el funcionamiento básico del sitio.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: janus_sid</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie de seguridad necesaria para el funcionamiento básico del sitio.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: .ASPXAUTH</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie de seguridad necesaria para el funcionamiento básico del sitio.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: VtexIdclientAutCookie_</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie de seguridad necesaria para el funcionamiento básico del sitio.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: VtexIdclientAutCookie_</p>
                <p className='texto_tamano'>Funcionabilidad: Cookie de seguridad necesaria para el funcionamiento básico del sitio.</p>
                <p className='texto_tamano'>Caducidad: Permanente</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: DV</p>
                <p className='texto_tamano'>Funcionabilidad: Es utilizada por Google para proveer servicios y extraer información anónima sobre la navegación.</p>
                <p className='texto_tamano'>Caducidad: 24 horas</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: __Secure-3PAPISID</p>
                <p className='texto_tamano'>Funcionabilidad: Es utilizada por Google para proveer servicios y extraer información anónima sobre la navegación.</p>
                <p className='texto_tamano'>Caducidad: 24 horas</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: __Secure-3PSID</p>
                <p className='texto_tamano'>Funcionabilidad: Es utilizada por Google para proveer servicios y extraer información anónima sobre la navegación.</p>
                <p className='texto_tamano'>Caducidad: 24 horas</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: __Secure-3PSIDCC</p>
                <p className='texto_tamano'>Funcionabilidad: Es utilizada por Google para proveer servicios y extraer información anónima sobre la navegación.</p>
                <p className='texto_tamano'>Caducidad: 24 horas</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>
                <p className='texto_tamano'>Denominación: __Secure-3PAPISID</p>
                <p className='texto_tamano'>Funcionabilidad: Es utilizada por Google para proveer servicios y extraer información anónima sobre la navegación.</p>
                <p className='texto_tamano'>Caducidad: 24 horas</p>
                <p className='texto_tamano'>Tipo de Cookie: Necesaria</p>


            </main>

        </div>
    )
}

export default PoliticasCookies;