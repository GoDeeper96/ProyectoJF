import React from 'react'
import './TerminosCondiciones.css'
import { Link } from 'react-router-dom'

const TerminosCondiciones = () => {
    return(
        <div>
            
            <div>
            <nav className="navegacion_historial">
                <Link  to='/' className="navegacion_historial__enlace">Inicio</Link>
                <p className="p__navegación_historial_no_margin">{'>'}</p>
                <Link  to='/terminos-y-condiciones' className="navegacion_historial__enlace_activo">Términos y Condiciones</Link>
           </nav> 
            </div>

            <main className="contenedor">
                <h1>Términos y Condiciones</h1>
                <p className='texto_tamano'>Estás en inversionesjyfdewjs.com, la tienda de insumos químicos más completa del Perú. Todas las compras a realizarse en esta página se encuentran sujetas a los siguientes términos y condiciones establecidos por Wilmer Julon Salcedo(Persona natural).</p>
                <p className='texto_tamano'>Toma en cuenta que cualquier persona que registre sus datos o realice cualquier tipo de transacción en esta página está tomando conocimiento y aceptando automáticamente los siguientes términos y condiciones establecidos que están situados a continuación.</p>
                <p className='texto_tamano'>Inversionesjyfdewjs.com se reserva el derecho de modificación y/o actualización de los referidos términos sin previo aviso, por lo cual, se recomienda de manera regular visitar esta sección para estar al tanto de cualquier novedad (modificación) sobre las condiciones que rigen a esta página web transaccional.</p>
                <p className='texto_tamano'>Nuestros términos y condiciones son los siguientes:</p>
                <h4 className='titulo_posicion'>1. Registro del usuario</h4>
                <p className='texto_tamano'>Para realizar cualquier compra en inversionesjyfdewjs.com, el usuario debe ser mayor de edad y deberá registrarse indicando los siguientes datos: nombres y apellidos completos, correo electrónico vigente, documento de identidad, dirección física de entrega y número telefónico fijo y/o móvil. Esta información será llenada en un formulario, que será enviado automáticamente al hacer clic en el botón que aparece al final del mismo.</p>
                <h4 className='titulo_posicion'>2. Contraseña</h4>
                <p className='texto_tamano'>El usuario deberá asignar una contraseña a su cuenta en inversionesjyfdewjs.com, la misma que será de acceso personal e intransferible. Es responsabilidad del usuario mantener esta contraseña a buen recaudo (deber de resguardo, reserva y cuidado de la contraseña), la misma que le permitirá acceder a realizar compras, así como al historial de las mismas y a su libreta de direcciones. Se presume que la contraseña sólo debe ser conocida por el titular de la cuenta en inversionesjyfdewjs.com pues es única, reservada e intransferible.</p>
                <h4 className='titulo_posicion'>3. Derechos del usuarioa</h4>
                <p className='texto_tamano'>En inversionesjyfdewjs.com, el usuario goza de todos los derechos que le reconoce la legislación peruana sobre materia de protección al consumidor, según Ley N°29571 -Código de Protección y Defensa del Consumidor-, y en materia de protección de datos personales, según Ley N°29733 y su Reglamento (Decreto Supremo N°003-2013-JUS). Esta última incluye los derechos de acceso, rectificación, cancelación y oposición (Derechos ARCO).</p>
                <p className='texto_tamano'>El solo hecho de visitar inversionesjyfdewjs.com no impone al usuario obligación alguna, salvo haya registrado sus datos o realizado una transacción, actos que se encuentran sometidos a los términos y condiciones señalados en esta sección.</p>
                <p className='texto_tamano'>Conforme a lo establecido por el Reglamento del Libro de Reclamaciones del Código de Protección y Defensa del Consumidor, aprobado mediante Decreto Supremo N° 011-2011-PCM, y sus modificatorias; inversionesjyfdewjs.com, como proveedor virtual, cuenta en esta página transaccional con un Aviso y con un Libro de Reclamaciones Virtual, en el cual los clientes podrán registrar sus quejas o reclamos, con la finalidad de mejorar nuestro estándar de servicio y la calidad de nuestros productos.</p>
                <h4 className='titulo_posicion'>4. Medios de pago</h4>
                <p className='texto_tamano'>El usuario de inversionesjyfdewjs.com podrá realizar el pago de sus compras bajo las siguientes modalidades: pago online con tarjetas Visa (débito o crédito), pago online con tarjetas MasterCard (débito, crédito), American Express (crédito), Diners (crédito) y pagos a través del servicio transferencia vía banca por Internet. Se aplican restricciones en montos máximos según las reglas establecidas por cada entidad financiera (para más información ver web de cada una de estas entidades).</p>
                <p className='texto_tamano'>En el caso de las tarjetas Visa, MasterCard, American Express, Diners aceptadas en esta página transaccional, aspectos relacionados a estas como la fecha de emisión, caducidad, bloqueos, monto de línea de crédito, entre otros, se regirán por el respectivo Contrato de Apertura y Reglamento de Uso firmado entre el usuario y la entidad financiera correspondiente. inversionesjyfdewjs.com no tendrá responsabilidad en cualquiera de los puntos antes señalados.</p>
                <p className='texto_tamano'>inversionesjyfdewjs.com podrá imponer condiciones de precio y promociones según el medio de pago elegido por el usuario, las mismas que serán oportunamente comunicadas a los consumidores en esta página web transaccional.</p>
                <p className='texto_tamano'>Es responsabilidad única del cliente indicar con qué medio de pago cancelará su compra, así como el tipo de comprobante que desea. Posteriormente no procederá cambio alguno.</p>
                <p className='texto_tamano'>IMPORTANTE: inversionesjyfdewjs.com se reserva el derecho de modificar su oferta de medios de pago sin previo aviso, por tal motivo, se recomienda regularmente acceder a los términos y condiciones para estar al tanto de cualquier novedad (modificación) sobre las condiciones que rigen a esta página web transaccional.</p>
                <h4 className='titulo_posicion'>5. Precios, productos y promociones</h4>
                <p className='texto_tamano'>Los precios y las promociones señaladas en www.inversionesjyfdewjs.com son exclusivos para las compras a realizarse en esta página transaccional.</p>
                <p className='texto_tamano'>Los precios, oferta de productos y promociones serán sólo vigentes mientras aparezcan en esta página transaccional, o hasta la fecha indicada en la promoción o hasta agotar stock, siendo además de uso exclusivo para consumo familiar (no más de una oferta por persona y/o compra con tarjeta de crédito o débito). Las compras en inversionesjyfdewjs.com son exclusivas para consumidor final, no se permite compras para reventa (actividad comercial).</p>
                <p className='texto_tamano'>En caso de presentarse un error involuntario tipográfico en alguno de nuestros precios, si el precio es más alto al publicado en la página, se contactará al usuario para las coordinaciones pertinentes y/o se cancelará la operación, lo cual será debidamente comunicado al cliente.</p>
                <h4 className='titulo_posicion'>6. Cancelación de pedido</h4>
                <p className='texto_tamano'>inversionesjyfdewjs.com se reserva el derecho de cancelar el pedido en el caso de posibles compras fraudulentas, estafas o similares, en caso la dirección brindada por el cliente no esté dentro de la zona de reparto habilitada por la empresa y en casos de imposibilidad de entrega de los pedidos (cliente ausente, celular no existe o apagado, dirección de entrega falsa), lo cual será oportunamente comunicado al cliente.</p>
                <h4 className='titulo_posicion'>7. Extorno o devolución por cancelación de pedido</h4>
                <p className='texto_tamano'>La cancelación del pedido iniciará el proceso de devolución para las compras realizadas con tarjeta de crédito y/o débito.</p>
                <p className='texto_tamano'>Si la compra se realizó con tarjeta de crédito, la devolución de dinero se realizará por medio de una transferencia bancaria, por lo que la cuenta de destino deberá estar a nombre de la persona natural o jurídica (empresa) que realizó la compra. Es responsabilidad del cliente brindar los datos bancarios correctos para poder realizar la devolución de dinero de manera exitosa.</p>
                <p className='texto_tamano'>El extorno se realizará en un plazo aproximado de siete (7) días hábiles, una vez se haya confirmado, completado el pago por la entidad de la tarjeta bancaria y validado el estado del producto. (para extornos a tarjetas de crédito y/o débito recomendamos verificar los tiempos de completación de este proceso). La información bancaria proporcionada por el cliente debe ser correcta para evitar retrasos en la atención, caso contrario los tiempos se prolongarán. A continuación el proceso de devolución de forma resumida:</p>
                <ol>
                    <li className='texto_tamano' value="1">El cliente cancela o decide solicitar una devolución de producto. 12/12/2022.</li>
                    <li className='texto_tamano'>Se recibe la solicitud y se empieza el proceso de devolución. 12/12/2022.</li>
                    <li className='texto_tamano'>Validación del pago o completación del pago recibido por la entidad bancaria de la tarjeta del cliente. (puede durar ‘x’ días, dependiendo de la entidad bancaria). x/12/2022</li>
                    <li className='texto_tamano'>Una vez realizada la validación, nos ponemos en contacto con el cliente personalmente, para acordar la revisión del estado del producto, y luego se evalúa el producto(dentro de los 7 días hábiles como máximo).</li>
                    <li className='texto_tamano'>Una vez evaluado, se procede a hacer la transferencia bancaria correspondiente en caso sea necesario(dentro de los 7 días hábiles).</li>
                </ol>
                <h4 className='titulo_posicion'>8. Despacho de productos a domicilio</h4>
                <p className='texto_tamano'>El despacho de las compras en inversionesjyfdewjs.com se realizará en Lima y Provincias, exclusivamente en las zonas de cobertura disponibles para selección al momento acordada o previamente confirmada por nosotros, al realizar una compra ( se efectuará por orden de llegada). Se aplican restricciones según zonas de entrega por distrito, cubriéndose solo los destinos que cuenten con accesibilidad para nuestros transportistas. Ver cobertura y zonas de despacho www.inversionesjyfdewjs.com.</p>
                <p className='texto_tamano'>El envío de las compras realizadas tendrá un costo. Este será señalado al usuario al momento de realizar su compra e indicar una dirección de envío válida de las disponibles.</p>
                <p className='texto_tamano'>Es responsabilidad del usuario indicar un lugar de envío real para su compra, así como la aceptación del día y rango horario señalado para la entrega. En caso se presente algún error en la dirección ingresada por el cliente podría no realizarse el despacho, como consecuencia se procedería con la cancelación de la compra y devolución del dinero según lo dispuesto en el numeral 6.</p>
                <p className='texto_tamano'>El cliente podrá acceder a los servicios de despacho a domicilio al momento de su compra y deberá seleccionar una opción específica. Las entregas “El mismo día” y “24 horas”, estarán sujetas al corte de horario según lo especificado en "Condiciones de entrega" del presente numeral, posterior a dichos cortes de horario el plazo de entrega se contabilizará a partir del día hábil siguiente. Es decir si se hace un pedido fuera del horario de atención, se contabilizará a partir del siguiente día, o es más probable que se entregue al día siguiente.</p>
                <p className='texto_tamano'>Como parte del procedimiento de verificación y coordinación, el equipo deinversionesjyfdewjs.com podrá comunicarse con el usuario a través de una llamada o correo electrónico a los números telefónicos o E-mail señalados al momento de registrarse en esta página web transaccional.</p>
                <p className='texto_tamano'>En caso de atraso en la entrega del pedido, por motivos de fuerza mayor, el equipo de inversionesjyfdewjs.com se contactará con el cliente vía correo, llamada o mensaje para acordar una nueva fecha y hora de reparto.</p>
                <p className='texto_tamano'>El titular de la compra es el único autorizado para la recepción del pedido, podrá designar a un tercero autorizado al momento de la compra, quien deberá ser mayor de edad. El cliente o a quien este designe para recibir el producto deberá presentar su DNI o Carné de extranjería cuando sea solicitado para fines de verificación de identidad. Si requiere actualizar los datos del responsable de la recepción del pedido, podrá contactarnos al 946 925 847 de lunes a viernes de 9:00 AM a 06:00 PM o al correo ventasquimico@inversionesjyfdewjs.com, con una anticipación mínima de 1 día hábil previo a la fecha programada.</p>
                <p className='texto_tamano'>El cliente deberá validar que la caja o bolsa que contenga el producto, esté sellado y no tenga signos de apertura previa; caso contrario no deberá recibir el producto y deberá comunicarse al 946 925 847 de lunes a viernes de 9:00 AM a 06:00 PM o al correo ventasquimico@inversionesjyfdewjs.com.</p>
                <p className='texto_tamano'>El cliente (o el tercero autorizado por él) deberá firmar el documento de entrega para dar su conformidad a la recepción del pedido o en su defecto autorizará al transportista – encargado del despacho del producto – a solicitar y tomar una foto de su DNI o Carné de extranjería, datos que serán tratados conforme a la Política de Privacidad de Inversiones J&F y en cumplimiento de la Ley N° 29733 Ley de Protección de Datos Personales y su Reglamento.</p>
                <p className='texto_tamano'>El transportista no realiza servicios de armado ni instalación de productos.</p>
                <p className='texto_tamano texto_negrita'>Condiciones especiales de entrega:</p>
                <p className='texto_tamano texto_negrita'>Entrega el mismo día:</p>
                <ul>
                    <li type="disc" className='texto_tamano'>Aplica sólo a compras realizadas antes de la 1:00 pm(a excepción de la disponibilidad de los despachos o envíos).</li>
                    <li type="disc" className='texto_tamano'>No válido para feriados.</li>
                    <li type="disc" className='texto_tamano'>Costo adicional de S/ 10.00.</li>
                </ul>
                <p className='texto_tamano texto_negrita'>Delivery en 24 horas o más:</p>
                <ul>
                    <li type="disc" className='texto_tamano'>No válido domingos ni feriados.</li>
                    <li type="disc" className='texto_tamano'>Depende del orden de recepción de pedidos.</li>
                    <li type="disc" className='texto_tamano'>Puede haber costo adicional, de ser así se le informará al cliente.</li>
                </ul>
                <h4 className='titulo_posicion'>9. Comprobantes de pago</h4>
                <p className='texto_tamano'>Todos los comprobantes de pago, al igual que los precios señalados en esta página transaccional, serán emitidos en Soles (S/).</p>
                <p className='texto_tamano'>Es responsabilidad única del cliente indicar si requiere de una boleta o una factura al momento de realizar su compra. Posteriormente no procederá cambio alguno.</p>
                <p className='texto_tamano'>Las facturas electrónicas, boletas de venta electrónicas y notas electrónicas estarán puestas a disposición del usuario a través de Inversionesjyfdewjs.com (factura electrónica) Previamente se enviará al cliente vía correo electrónico la información necesaria para acceder a la sección correspondiente de acuerdo al Artículo 15 de la Resolución de Superintendencia N° 097- 2012/SUNAT.</p>

            </main>

        </div>
    )
}

export default TerminosCondiciones;