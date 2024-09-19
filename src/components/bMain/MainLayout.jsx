import React from 'react'
import { Header } from '../aHeader/Header'
import { Novedades } from './views/Novedades'
import { Outlet } from 'react-router-dom'
import { Footer } from '../cFooter/Footer'

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
