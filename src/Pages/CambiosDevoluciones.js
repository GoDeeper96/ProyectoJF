import React from 'react'
import './CambiosDevoluciones.css'
import { Link } from 'react-router-dom'

const CambiosDevoluciones = () => {
    return(
        <div>
            <div>
            <nav className="navegacion_historial">
                <Link  to='/' className="navegacion_historial__enlace">Inicio</Link>
                <p className="p__navegación_historial_no_margin">{'>'}</p>
                <Link  to='/cambios-y-devoluciones' className="navegacion_historial__enlace_activo">Cambios y Devoluciones</Link>
           </nav> 
            </div>
            <main className="contenedor">
                <h1>Cambios y Devoluciones</h1>
                <div>
                <ol>
                    <li className='texto_tamano' value="1">Para cualquier cambio o devolución de mercadería, el cliente deberá presentar obligatoriamente el comprobante de pago (artículo 1° del Reglamento de Comprobantes de Pago). Se recomienda brindar su correo electrónico al momento de realizar la compra y así poder facilitarle una copia de su boleta de venta electrónica en caso usted lo requiera.</li>
                    <li className='texto_tamano'>Todo cambio o devolución será realizado dentro de los 7 días hábiles de emitido justo después de la entrega del producto. Los productos se deben encontrar OPERATIVOS, SELLADOS Y SIN SEÑALES DE USO, así como sus contenedores o frascos, los cuales deben estar completos como se especifica en el comprobante o factura. En el caso de productos en promoción, se requiere la entrega de todos los productos incluidos en la promoción correspondiente.</li>
                    <li className='texto_tamano'>Para todo cambio o devolución, el cliente deberá contactarse a cualquiera de nuestros números incluidos en la página web, luego se hará una comprobación presencial en donde se comprobará el estado del producto y si el mismo cumple con nuestras políticas de cambios o devoluciones.</li>
                    <li className='texto_tamano'>En caso el cliente requiera la devolución de su dinero:<br/>
                                                a. Para compras realizadas mediante tarjeta de crédito y/o débito, la devolución de dinero se realizará por medio de una transferencia bancaria en un plazo estimado de hasta 7 días hábiles después de haberse realizado completamente la compra y haberse validado el estado del producto(esto puede tardar otros 7 días hábiles).Por otro lado, la cuenta de destino deberá estar a nombre de la persona natural o jurídica (empresa) que realizó la compra, o en su defecto podrá autorizar la transferencia a nombre de un tercero mediante una solicitud escrita. Es responsabilidad del cliente brindar los datos bancarios correctos para poder realizar la devolución de dinero de manera exitosa.<br/>
                                                b. Para compras realizadas mediante efectivo, contraentrega o transferencia inmediata, la devolución de dinero se realiza por transferencia bancaria y las condiciones son las mismas que en el punto anterior.</li>
                </ol>
                </div>
            </main>
        </div>
    )
}

export default CambiosDevoluciones;