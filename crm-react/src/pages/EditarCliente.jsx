/* eslint-disable react-refresh/only-export-components */

import { obtenerCliente } from '../data/clientes';

// Se crea esata funcion para la obtencion de un cliente
export const getUserLoader = async ({params}) => {
    const cliente = await obtenerCliente(params.clienteId);
    if (Object.values(cliente).length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "Busqueda no encontrada"
        })
    }
    return cliente;
}

export const EditarCliente = () => {
    return (
        <div>EditarCliente</div>
    )
}
