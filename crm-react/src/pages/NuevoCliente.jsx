/* eslint-disable react-refresh/only-export-components */
import {useNavigate, Form, useActionData} from 'react-router-dom';
import { Formulario } from '../components/Formulario';
import { Error } from '../components/Error';

export const action = async ({request}) => {
    const formData = await request.formData();

    // console.log(formData.get("nombre"));
    // console.log([...formData]);
    const datos = Object.fromEntries(formData);
    
    const errores = []
    // Validacion del formulario
    if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios");
    }

    // Retornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores;
    }


    return { ok: true };
}

export const NuevoCliente = () => {

    const errores = useActionData();
    const navigate = useNavigate();


    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
            <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

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
                >
                    <Formulario />

                    <input
                        type="submit"
                        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                        value="Registrar Cliente"
                    />
                </Form>
            </div>
        </>
    )
}

/**
 * 1. Se empieza creando o importando el FORM
 * 
 * 
 * 
 * 
 * 
 * Como usar el children:
 * 1. Se declara como etiquetas con apertura y cierre y lo que se escriba entre las etiquetas se pasan como children
 */
