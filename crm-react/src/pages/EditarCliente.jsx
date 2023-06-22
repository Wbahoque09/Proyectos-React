/* eslint-disable react-refresh/only-export-components */

import { Form, redirect, useActionData, useLoaderData, useNavigate } from 'react-router-dom';
import { actualizarCliente, obtenerCliente } from '../data/clientes';
import { Formulario } from '../components/Formulario';
import { Error } from '../components/Error';

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

// Se crea esta funcion para capturar los datos a enviar del formulario
export const action = async ({request, params}) => {

    const formData = await request.formData();

    // console.log(formData.get("nombre"));
    // console.log([...formData]);
    const datos = Object.fromEntries(formData);

    const email = formData.get("email");
    
    const errores = []
    // Validacion del formulario
    if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios");
    }

    // Expresion regular para comprobar email
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    // Comprobador de expresion regular del email
    if (!regex.test(email)) {
        errores.push("El email no es valido");
    }

    // Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores;
    }

    await actualizarCliente(params.clienteId,datos); // Actualizar Cliente

    return redirect("/"); // Este redirect sirve para rediccionar a donde uno le indique, viene importando de react router dom

}

export const EditarCliente = () => {

    const navigate = useNavigate();
    const cliente = useLoaderData();
    const errores = useActionData();


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

                {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error> )}
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
