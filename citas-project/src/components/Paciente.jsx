// import { useEffect } from 'react';

export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    // useEffect(() => {
    //     console.log("El componente esta listo");
    // }, []);
    // este useEffect se dispara una vez porque no se le esta pasando ninguna dependencia

    const { nombre } = paciente;
    const { propietario } = paciente;
    const { email } = paciente;
    const { alta } = paciente;
    const { sintomas } = paciente;
    const { id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm("Deseas eliminar este paciente?");

        if (respuesta) {
            eliminarPaciente(id);
        }
    };

    return (
        <>
            <div className="mx-5 mb-5 bg-white shadow-md px-5 py-10 rounded-xl">
                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Nombre: {""}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Propietario: {""}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Email: {""}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Fecha Alta: {""}
                    <span className="font-normal normal-case">{alta}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase">
                    Sintomas: {""}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>

                <div className="flex justify-between mt-10">
                    <button
                        type="button"
                        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                        onClick={() => setPaciente(paciente)}
                    >
                        Editar
                    </button>
                    <button
                        type="button"
                        className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                        onClick={handleEliminar}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </>
    );
};
