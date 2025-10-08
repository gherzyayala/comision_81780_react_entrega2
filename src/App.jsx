import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router'
import ItemDetailContainer from './components/ItemDetailContainer'
import { createContext } from 'react'
import { CartContextProvider } from './context/cartContext'
import CartContainer from './components/CartContainer'
import app from './data/firestore'
// 1. Importar BrowserRouter

function App() {
  
  return (
    <>
      
      <CartContextProvider value={ {cart:"ok"} }>
        {/* <button onClick={exportProductsToFirestore}>Export data a FS</button>  */}
        <BrowserRouter>
          <main className="container">
            <NavBar/>
            <Routes>
              {/* 1 pagina para ItemListContainer 
                  2 pagina para (ItemDetail)
                  1 pagina de 404, cuando no encontremos contenido*/
              }
              <Route path="/" element={ <ItemListContainer saludo="Bienvenido a mi Tienda en Línea"/>} />
              <Route
              path="category/:categParam"
              element = { <ItemListContainer saludo="Categoria"></ItemListContainer>} />
              
              <Route path="/detail/:idParam" element={ <ItemDetailContainer/>} />
              <Route path="*" element={ <p>Opps!! No encontramos esto</p> }></Route>
              <Route path="/cart" element={ <CartContainer/> }/>
            </Routes>

          </main>
        </BrowserRouter>
      </CartContextProvider>
    </> 
  )
}

export default App
