import './styles/styles.scss'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Nosotros } from './components/main/views/Nosotros'
import { Novedades } from './components/main/views/Novedades'
import { Catalogo } from './components/main/views/Catalogo'

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/home" element={<Main/>} />
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/novedades' element={<Novedades/>}/>
          <Route path='/catalogo' element={<Catalogo/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
