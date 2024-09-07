import React from 'react'
import { Header } from '../aHeader/Header'
import { Novedades } from './views/Novedades'
import { Outlet } from 'react-router-dom'

export const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />


            </main>
        </>
    )
}
