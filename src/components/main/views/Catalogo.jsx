import React, { useEffect, useState } from 'react';
import data from '../../../data/productos.json';

export const Catalogo = () => {
  const [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 500);
    });
  };

  useEffect(() => {
    pedirProductos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <main>
      <div className='cuerpo__paginaPrincipal'>
        <h2 className='titulos'>Catálogo</h2>
        <div className='paginaPrincipal__catalogo'>
          {productos.length > 0 ? (
            productos
              .filter(producto => producto.stock > 0)
              .map(producto => (
                <div className='catalogo__fichaProducto' key={producto.id}>
                  <p className='fichaProducto__titulo'>{producto.nombre}</p>
                  <p className='fichaProducto__descripcion'>{producto.descripcion}</p>
                  <img src={producto.imagen} className='fichaPRoducto__imagen'/>
                </div>
              ))
          ) : (
            "No hay productos"
          )}
        </div>
      </div>
    </main>
  );
};
