import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import '../css/styles.css';

export const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)
        
        const totalDisponible = presupuesto - totalGastado;

        setDisponible(totalDisponible);

        setGastado(totalGastado);
    }, [gastos]) // Este useEffect se hace para que se ejecute cada vez que haya un gasto
    

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
                    <CircularProgressbar
                        value={0}
                    
                    />
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
