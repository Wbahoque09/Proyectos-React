import { useEffect, useState } from 'react';
import { Error } from './Error';



export const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setAlta(paciente.alta);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);
    // este useEffect se dispara solo cuando se presiona el boton de editar, porque se le pasa la dependencia de las props y se ejecutara cada vez que paciente cambie

    // useEffect(() => {
    //     console.log("El componente esta listo");
    // }, []);
    // este useEffect se dispara una vez porque no se le esta pasando ninguna dependencia
    

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

    const handleInputChange = ({target}) => {
        setNombre(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validacion del formulario
        if ([nombre, propietario, email, alta, sintomas].includes('')) {
            // console.log('Hay Al menos un campo vacio ');
            setError(true);
        } else {
            setError(false);
            // Se crea un objeto de pacientes, en este objeto se crea un nuevo paciente
            const objetoPaciente = {
                nombre, 
                propietario, 
                email, 
                alta, 
                sintomas,
            }
            
            // paciente.id es el objeto que se esta recibiendo del componente App.jsx, y pues este ya trae algo, con esto sabemos si estamos creando o editando un objeto
            if (paciente.id) {
                objetoPaciente.id = paciente.id;
                const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id 
                    ? objetoPaciente : pacienteState ); // Este .map lo que hace es recorrer por cada lista de pacientes ya creada verificar si encuentra el id guarda los cambios que se hayan hecho sino deja todo como está.

                setPacientes(pacientesActualizados);
                setPaciente({}); // Esto es para limpiar el state
                // console.log(objetoPaciente); Para comprobar el cambio o cambios que se hacen en el objeto por el ID
                // console.log(paciente); Imprime el objeto sin el ID y sin los cambios
                // Editando el Registro
            } else {
                // Nuevo registro
                objetoPaciente.id = generarId();
                setPacientes([...pacientes, objetoPaciente]); // Aqui tomamos una copia del state y le agregamos el nuevo paciente
            }

            // console.log(objetoPaciente);
            

            // Reiniciar el form
            setNombre('');
            setPropietario('');
            setEmail('');
            setAlta('');
            setSintomas('');

        }

        // console.log('Enviando Formulario');
    }

    // console.log(paciente);


    return(

        <>
            <div className="md:w-1/2 lg:w-2/5 mx-5">
                <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>

                <p className="text-lg mt-5 text-center mb-10">
                    Añade Pacientes {''}
                    <span className="text-indigo-600 font-bold">Administralo</span>
                </p>

                <form 
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                >
                    {/* Dentro de la expresion javaScript se ponen los parentesis para poder trabajar el html ed formal normal */}
                    {/* { error && <Error mensaje="Todos los campos son obligatorios"/>} Forma normal de pasar las props */}
                    { error && <Error>Todos los campos son obligatorios</Error>}
                    <div className="mb-5">
                        <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                            Nombre Mascota
                        </label>

                        <input
                            id="mascota" 
                            type="text"
                            placeholder="Nombre de la Mascota"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={ nombre }
                            // onChange={ (e) => setNombre(e.target.value) } // Manera de Juan de hacer el onChange
                            onChange={ handleInputChange }
                        />

                    </div>

                    <div className="mb-5">
                        <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                            Nombre Propietario
                        </label>

                        <input
                            id="propietario" 
                            type="text"
                            placeholder="Nombre del Propietario"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={ propietario }
                            onChange={ (e) => setPropietario(e.target.value) }
                        />

                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                            Email
                        </label>

                        <input
                            id="email" 
                            type="email"
                            placeholder="Email Contacto Propietario"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }
                        />

                    </div>

                    <div className="mb-5">
                        <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                            Alta
                        </label>

                        <input
                            id="alta" 
                            type="date"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={ alta }
                            onChange={ (e) => setAlta(e.target.value) }
                        />

                    </div>

                    <div className="mb-5">
                        <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                            Sintomas
                        </label>

                        <textarea 
                            id="sintomas"
                            placeholder="Describe los Sintomas"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={ sintomas }
                            onChange={ (e) => setSintomas(e.target.value) }
                        />

                    </div>

                    <input 
                        type="submit"
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                        value={paciente.id ? "Editar Paciente" : "Agregar Paciente"} 
                    />
                </form>

            </div>

        </>

    )


}
