import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
    const [linkFoto, setLinkFoto] = useState('/media/images/puertaCerradaBYN.png');
    const [mensaje, setMensaje] = useState('Estamos preparando todo para vos.')
    const [width, setWidth] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLinkFoto('/media/images/puertaCerradaColor.png');
            setMensaje('Estamos terminando de acomodar.')
        }, 2000);

        const secondTimer = setTimeout(() => {
            setMensaje('Ya estamos, tocá la puerta para entrar.')
        }, 4000);

        return () => {
            clearTimeout(timer);
            clearTimeout(secondTimer);
        };
    }, []);

    const abrirPuerta = () => {
        setLinkFoto('/media/images/puertaAbierta.png');
        setMensaje('Bienvenide a Paykuna, estás siendo redireccionade.')
        

        const fourthTimer = setTimeout(() => {
            navigate('/home');
        }, 1500)

        return () => {
            clearTimeout(fourthTimer);
        }
    }

    return (
        <div className='contenedorBienvenida'>
            <img className='puertaBienvenida' src={linkFoto} alt="puerta" style={{ width: width }} onClick={abrirPuerta} />
            <p className='mensajeDeEstado'>{mensaje}</p>
        </div>
    );
};
