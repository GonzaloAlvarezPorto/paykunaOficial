import './styles/styles.scss'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/bMain/MainLayout'
import { Nosotros } from './components/bMain/views/Nosotros'
import { Novedades } from './components/bMain/views/Novedades'
import { Catalogo } from './components/bMain/views/Catalogo'
import { Welcome } from './components/bMain/Welcome'
import { Home } from './components/bMain/views/Home'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<MainLayout><Home /></MainLayout>} />
          <Route path="/nosotros" element={<MainLayout><Nosotros /></MainLayout>} />
          <Route path="/novedades" element={<MainLayout><Novedades /></MainLayout>} />
          <Route path="/catalogo" element={<MainLayout><Catalogo /></MainLayout>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
