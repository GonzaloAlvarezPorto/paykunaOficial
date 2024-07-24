import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [menuVisible, setMenuVisible] = useState(window.innerWidth > 800);

    const abrirMenu = () => {
        setMenuVisible(true);
    };

    const cerrarMenu = () => {
        setMenuVisible(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800) {
                setMenuVisible(true);
            } else {
                setMenuVisible(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="encabezado__menu">
            <button className="menu__botonDesplegable">
                <img onClick={abrirMenu} className='botonDesplegable__imagen' src="media/images/boton__apertura__menu.png" alt="Abrir menú" />
            </button>
            <ul className="menu__listado" style={{ display: menuVisible ? 'flex' : 'none' }}>
                    <Link to="/novedades" className="listado__items">
                        NOVEDADES
                    </Link>
                    <Link to="/nosotros" className="listado__items">
                        SOBRE NOSOTRES
                    </Link>
                    <Link to="/catalogo" className="listado__items">
                        CATÁLOGO
                    </Link>
                    <button className="listado__items oculto">
                        <img onClick={cerrarMenu} className='items__boton' src="media/images/flecha_blanca_asc.png" alt="Abrir menú" />
                    </button>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
