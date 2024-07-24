import React from 'react'
import { Link } from 'react-router-dom'

export const Logo = () => {
    return (
        <div className="encabezado__contenedorLogos">
            <Link to="/home" className="contenedorLogos__enlace">
                <div className="contenedorLogos__logo">
                    <img className="logo__encabezadoImagenLogo" src="/media/images/paykuna.png" alt="logo paykuna" />
                </div>
                <div className="contenedorLogos__texto">
                    <img className="logo__encabezadoImagenTexto" src="/media/images/texto__almacén__paykuna.png"
                        alt="texto logo paykuna" />
                </div>
            </Link>
        </div>
    )
}
