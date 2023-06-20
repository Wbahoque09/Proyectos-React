/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom';
import { Cliente } from '../components/Cliente';
import { obtenerClientes } from '../data/Clientes';

export const clientesLoader = () => {
    const clientes = obtenerClientes();

    return clientes;
    // console.log(import.meta.env); Aqui vemos que tenemos en el archivo .env
} // El loader siempre debe retornar algo, y actua o funciona de una manera similar al useEffect
// Segunda impresion es que no es necesario que se llame loader como tal porque puede tomar cualquier nombre la funcion

export const Inicio = () => {

    const datos = useLoaderData();

    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
            <p className="mt-3">Administra tus clientes</p>

            {datos.length ? 
                (<table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Clientes</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map((cliente) => ( 
                            <Cliente // Se mapea los datos para pasaserlos al componente y no generar mas codigo aqui
                                cliente={cliente} // En este prop se pasan la interaccion del map (Se pasan cada objeto completo)
                                key={cliente.id}
                            />
                        ))}
                    </tbody>
                </table>):
                (<p className="text-center mt-10">No hay clientes aún</p>)
            }
        </>
    )
}
