

export const generarID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

// Aqui se genera los ID que van a ser unicos para identificar cada gasto que se "guarde"

export const formatearFecha = (fecha) => {
    const fechanueva = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day:'2-digit',
    }

    return fechanueva.toLocaleString('es-CO', opciones);
}

// Aqui se genera la fecha que se van a mostrar en cada gasto almacenado
