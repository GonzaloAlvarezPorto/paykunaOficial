import React from 'react'
import { Logo } from './Logo'
import NavBar from './NavBar'

export const Header = () => {

    return (
        <header>
            <div className="encabezado">
                <Logo />
                <NavBar/>
            </div>
        </header>
    )
}
