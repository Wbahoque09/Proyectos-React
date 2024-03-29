/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { Form, useNavigate, redirect } from 'react-router-dom';
import { eliminarCliente } from '../data/clientes';

export const action = async ({params}) => {
    await eliminarCliente(params.clienteId);
    return redirect("/");
}

export const Cliente = ({cliente}) => {

    const navigate = useNavigate();

    const {id,nombre,telefono,email,empresa} = cliente; // Desestructuracion de cliente para acceder mas facil a sus atributos

    return (
        <>
            <tr className="border-b">
                <td className="p-6 space-y-2">
                    <p className="text-2xl text-gray-800">{nombre}</p>
                    <p>{empresa}</p>
                </td>

                <td className="p-6">
                    <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                    <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
                </td>

                <td className="p-6 flex gap-3">
                    <button
                        type="button"
                        className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                        onClick={() => navigate(`/clientes/${id}/editar`)} // Aqui navegamos en la url dinamica, se le pasa el valor por el ID
                    >
                        Editar
                    </button>

                    <Form
                        method="POST"
                        action={`/clientes/${id}/eliminar`} // Este action se pasa la url para poder capturar el id a eliminar
                        onSubmit={(e) => {
                            if (!confirm("¿Deseas eliminar este registro?")) { // Se niega el confirm para que este acceda al aceptar y no al cancelar
                                e.preventDefault();
                            }
                        }}
                    >
                        <button
                            type="submit"
                            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
                        >
                            Eliminar
                        </button>
                    </Form>
                    
                </td>
            </tr>
        </>
    )
}

/**
 * Etiqueta Form:
 * Es una etiqueta de react router dom, los metodos y actions que vemos son de este
 * el onSubmit es de react
 */
