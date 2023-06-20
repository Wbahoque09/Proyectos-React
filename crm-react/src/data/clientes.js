

export const obtenerClientes = async () => {
    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await respuesta.json()
    return resultado;
}

export const agregarCliente = async (datos) => {

    console.log(datos);
}