

export const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) => {
        return Number(cantidad).toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP'
        });
    }

    // console.log(formatearCantidad()); No sirve :V

  return (
    <>
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                Grafica aqui
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span> {formatearCantidad(0)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(0)}
                </p>
            </div>
        </div>
    </>
  )
}