import React from 'react'
import dataRedes from '../../data/redes.json';
import { Link } from 'react-router-dom';

export const Footer = () => {

    const redes = dataRedes;

    return (
        <footer className='pieDePagina'>

            <div className='pieDePagina__redes'>

                <div className='redes__contenedores'>
                    {redes.length > 0 ? (
                        redes.map((red, index) => (
                            <div key={index} className='contenedores__enlace'>
                                <Link to={red.enlaceRed} target='_blank'>
                                    <img src={red.imagenRed} className='enlace__imagen' />
                                </Link>
                                <Link to={red.enlaceRed} className='enlace__texto' target='_blank'>
                                    {red.descripcion}
                                </Link>
                            </div>
                        ))
                    ) : (<p>Nada que mostrar</p>)}
                </div>
            </div>
            <div className='pieDePagina__derechos'>
                <p>
                    Derechos reservados por Almacén Orgánico / Agroecológico Paykuna
                </p>
                <img className='derechos__imagen' src='/media/images/paykuna.png'/>
            </div>
        </footer>
    )
}
