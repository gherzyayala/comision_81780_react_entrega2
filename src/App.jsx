import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Item from './components/Item'
import NavBar from './components/NavBar'
import Saludo from './components/Saludo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Renderizamos el NavBar  */}
      <NavBar/>

      {/* Voy a renderizar/pegar mi componente de ItemList */}
      <Saludo
      saludo="Bienvenido a mi Tienda en Línea"
      />
      {/* Celular */}
      <Item
      title="Celular"
      price={400}
      imgURL="https://thumbs.dreamstime.com/b/maqueta-del-artilugio-teléfono-celular-104748796.jpg"
      />
      {/* monitor */}
      <Item
      title="Monitor"
      price={500.59}
      imgURL="https://www.efe.com.pe/media/catalog/product/g/p/gp-mgmg2730_01.jpg"
      />
      {/* mouse */}
      <Item
      title="Mouse"
      price={999}
      imgURL="https://freerangestock.com/sample/36653/wireless-computer-mouse-isolated-on-white-background.jpg"
      />
    </>
  )
}

export default App
