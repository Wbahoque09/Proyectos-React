import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { NuevoCliente, action as nuevoClienteAction } from './pages/NuevoCliente';
import { Inicio, clientesLoader } from './pages/Inicio';
import { ErrorPage } from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/", // El path sirve para especificar el patron de la URL que activara determinada ruta.
    element: <Layout />, // El element podemos renderizar una ruta, esta puede ser como en este caso un componente 
    children: [
      {
        index: true, // El index va a mostrar o hacer referencia al path de inicio ("/")
        element: <Inicio />,
        loader: clientesLoader, // Aqui el componente inicio sabe lo que tiene loader
        errorElement: <ErrorPage /> // Aqui renderizamos una ventana de error
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction // Este action recibe la informacion del formulario y el formulario conocera a donde tiene que mandar la informacion
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
