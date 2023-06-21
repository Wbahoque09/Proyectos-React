
// La funcion obtenerClientes es para hacer una peticion (fetch) y por defecto es GET
export const obtenerClientes = async () => {
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await respuesta.json()
    return resultado;
}

// La funcion obtenerCliente es para hacer una peticion (fetch) y obtener un solo cliente para editar
export const obtenerCliente = async (id) => {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const resultado = await respuesta.json()
    return resultado;
}

// La funcion agregarClientes se utiliza para hacer otra peticion 
export const agregarCliente = async (datos) => {

    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, { // Dentro del fetch se define una ruta, en este caso esta 
            method: "POST", // Se define tipo de metodo de la peticion
            body: JSON.stringify(datos), // Al ser POST, se pasa un body que requiere la peticion
            headers: { // Se pasa un headers, que especifica el tipo de contenido de la peticion
                "Content-Type": "application/json"
            }
        });
        await respuesta.json() // Aqui esperamos un booleano (true o false)
    } catch (error) {
        console.log(error);
    }

}