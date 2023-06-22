/* eslint-disable react-refresh/only-export-components */

import { Form, useLoaderData, useNavigate } from 'react-router-dom';
import { obtenerCliente } from '../data/clientes';
import { Formulario } from '../components/Formulario';

// Se crea esta funcion para la obtencion de un cliente y se pasa en el Loader
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

    const navigate = useNavigate();
    const cliente = useLoaderData();
    


    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar cliente</h1>
            <p className="mt-3">Modifica los datos de un cliente</p>

            <div className="flex justify-end">
                <button 
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    // onClick={() => navigate("/")} Aqui navegamos a la ruta principal
                    onClick={() => navigate(-1)} // Aqui navegamos a la pagina anterior
                >
                    Regresar
                </button>
            </div>

            <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-8">

                {/* {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error> )} */}
                <Form
                    method="POST"
                    noValidate
                >
                    <Formulario 
                        cliente={cliente}
                    />

                    <input
                        type="submit"
                        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg cursor-pointer"
                        value="Actualizar"
                    />
                </Form>
            </div>
        </>
    )
}
