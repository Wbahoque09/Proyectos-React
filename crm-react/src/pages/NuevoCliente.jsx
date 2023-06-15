/* eslint-disable react-refresh/only-export-components */
import {useNavigate, Form} from 'react-router-dom';
import { Formulario } from '../components/Formulario';

export const action = () => {
    console.log("Submit al formulario...");
    return { ok: true };
}

export const NuevoCliente = () => {

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
 */
