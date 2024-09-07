import './styles/styles.scss'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './components/bMain/Main'
import { Nosotros } from './components/bMain/views/Nosotros'
import { Novedades } from './components/bMain/views/Novedades'
import { Catalogo } from './components/bMain/views/Catalogo'
import { Welcome } from './components/bMain/Welcome'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Main />} >
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="novedades" element={<Novedades />} />
            <Route path="catalogo" element={<Catalogo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
