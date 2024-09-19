import React from 'react'
import dataNovedades from '../../../data/novedades.json';

export const Novedades = () => {

  const novedades = dataNovedades;

  return (
    <>
      <h2 className='titulos'>Novedades</h2>
      <div className='cuerpo__novedades'>
        {novedades.length > 0 ? (
          novedades.map((novedad, index) => (
            <div key={index} className="contenedor__novedades">
              <p className='novedades__titulo'>{novedad.producto}</p>
              <p className="novedades__descripcion">{novedad.descripcion}</p>
              <img className='novedades__imagen' src={novedad.productoImagen} title={novedad.productoImagen} />
            </div>
          ))
        ) : (<p>Nada para mostrar</p>)}
      </div>
    </>
  )
}
