

export const generarID = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
}

// Aqui se genera los ID que van a ser unicos para identificar cada gasto que se "guarde"
