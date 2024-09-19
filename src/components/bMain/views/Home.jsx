import React from 'react'
import dataTexto from '../../../data/mensajeBienvenida.json'

export const Home = () => {

    const textos = dataTexto;

    return (
        <div className="cuerpo__paginaPrincipal">
            <div className="paginaPrincipal__contenedorTitulo">
                <h1 className="contenedorTitulo__texto">
                    ¡Bienvenidos a Almacén Paykuna!
                </h1>
            </div>
            <div className="paginaPrincipal__mensaje">
            {textos.length > 0 ? (
                textos.map((texto, index) => (
                        <p key={index} className="mensaje__texto">
                            {texto.parrafo}
                        </p>
                ))
            ) : (<p>No hay nada que mostrar</p>)}
            </div>
        </div>
    )
}
