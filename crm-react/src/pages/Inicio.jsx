import { useLoaderData } from 'react-router-dom';
import { Cliente } from '../components/Cliente';

export const clientesLoader = () => {
    const clientes = [
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguel@juan.com",
            empresa: 'Codigo Con Juan'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@juan.com",
            empresa: 'Codigo Con Juan'
        },
    ];
    return clientes; 
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
