import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Componente from './comp.jsx'
import Venta from './ventas/componentes/Venta.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Componente />
  </React.StrictMode>
)
