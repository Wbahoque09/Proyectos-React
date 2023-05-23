import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { NuevoCliente } from './pages/NuevoCliente';
import { Inicio } from './pages/Inicio';

const router = createBrowserRouter([
  {
    path: "/", // El path sirve para especificar el patron de la URL que activara determinada ruta.
    element: <Layout />, // El element podemos renderizar una ruta, esta puede ser como en este caso un componente 
    children: [
      {
        index: true, // El index va a mostrar o hacer referencia al path de inicio ("/")
        element: <Inicio />
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />
      }
    ] // En el children se renderizara todo el resto de rutas creadas, y es lo que captura el outlet en el componente Layout
    // El componente Layout es el componente padre y sus hijos estan dentro de children
  },
  // {
  //   path: "/nosotros",
  //   element: <h1>Nosotros</h1>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
