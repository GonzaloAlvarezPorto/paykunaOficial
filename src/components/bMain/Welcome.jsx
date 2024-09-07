import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Welcome = () => {
    const [linkFoto, setLinkFoto] = useState('/media/images/puertaCerradaBYN.png');
    const [mensaje, setMensaje] = useState('Nos estamos preparando para vos')
    const [width, setWidth] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLinkFoto('/media/images/puertaCerradaColor.png');
            setMensaje('Estamos terminando de acomodar')
        }, 2000);

        const secondTimer = setTimeout(() => {
            setLinkFoto('/media/images/puertaAbierta.png');
            setMensaje('Bienvenidxs a Paykuna')
        }, 4000);

        const thirdTimer = setTimeout(() => {
            setLinkFoto('/media/images/paykuna.png')
            setWidth('100px');
        },5000)

        const fourthTimer = setTimeout(()=> {
            navigate('/home');
        },6000)

        return () => {
            clearTimeout(timer);
            clearTimeout(secondTimer);
            clearTimeout(thirdTimer);
            clearTimeout(fourthTimer);
        };
    }, []);

    return (
        <div className='contenedorBienvenida'>
            <img className='puertaBienvenida' src={linkFoto} alt="puerta" style={{width:width}}/>
            <p className='mensajeDeEstado'>{mensaje}</p>
        </div>
    );
};
