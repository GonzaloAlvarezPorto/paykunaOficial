import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [menuVisible, setMenuVisible] = useState(window.innerWidth > 800);

    const abrirMenu = () => {
        setMenuVisible(true);
    };

    const cerrarMenu = () => {
        if (window.innerWidth < 800) {
            setMenuVisible(false);
        }
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
        <div className="encabezado__menu">
            <button className="menu__botonDesplegable" onClick={abrirMenu}>
                <img className='botonDesplegable__imagen' src="media/images/boton__apertura__menu.png" alt="Abrir menú" />
            </button>
            <ul className="menu__listado" style={{ display: menuVisible ? 'flex' : 'none' }}>
                <li>
                    <Link to="novedades" className="listado__items" onClick={cerrarMenu}>
                        NOVEDADES
                    </Link>
                </li>
                <li>
                    <Link to="nosotros" className="listado__items" onClick={cerrarMenu}>
                        SOBRE NOSOTRES
                    </Link>
                </li>
                <li>
                    <Link to="catalogo" className="listado__items" onClick={cerrarMenu}>
                        CATÁLOGO
                    </Link>
                </li>
                <li>
                    <button className="listado__items oculto" onClick={cerrarMenu}>
                        <img className='items__boton' src="media/images/flecha_blanca_asc.png" alt="Cerrar menú" />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
