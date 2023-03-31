import { useEffect, useState } from 'react';


export const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)
        console.log(totalGastado);

        setGastado(totalGastado);
    }, [gastos])
    

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
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    </>
  )
}
