import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../css/styles.css';

export const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [porcentaje, setPorcentaje] = useState(0);
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0)
        
        const totalDisponible = presupuesto - totalGastado;

        // Calcular el porcentaje gastado
        const nuevoPorcentaje = ((( presupuesto - totalDisponible ) / presupuesto ) * 100).toFixed(2);

        setDisponible(totalDisponible);

        setGastado(totalGastado);

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje);
        }, 1000);

    }, [gastos]) // Este useEffect se hace para que se ejecute cada vez que haya un gasto
    

    const formatearCantidad = (cantidad) => {
        return Number(cantidad).toLocaleString("es-CO", {
            style: "currency",
            currency: "COP"
        });
    }

    // console.log(formatearCantidad()); No sirve :V

    return (
        <>
            <div className="contenedor-presupuesto contenedor sombra dos-columnas">
                <div>
                    <CircularProgressbar
                        styles={buildStyles({
                            pathColor: "#3B82F6",
                            trailColor: "#F5F5F5",
                        })}
                        value={porcentaje}
                    
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
