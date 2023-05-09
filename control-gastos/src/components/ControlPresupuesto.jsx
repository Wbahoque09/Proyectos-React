import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../css/styles.css';

export const ControlPresupuesto = ({
    presupuesto,
    setPresupuesto,
    gastos,
    setGastos,
    setIsValidPresupuesto,
}) => {

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

    const handleResetApp = () => {
        const resultado = confirm("¿Seguro que deseas reiniciar la app?");

        if (resultado) {
            setPresupuesto(0); // Se pasa a 0 para actualizar el state y todo regrese como al principio
            setGastos([]); // Se pasa un array vacio [] para actualizar el state y todo regrese como al principio
            setIsValidPresupuesto(false); // Se pone en false para que rediriga a la ventana donde se coloca el presupuesto.
        }
    }
    // console.log(formatearCantidad()); No sirve :V

    return (
        <>
            <div className="contenedor-presupuesto contenedor sombra dos-columnas">
                <div>
                    <CircularProgressbar
                        styles={buildStyles({
                            pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
                            trailColor: "#F5F5F5",
                            textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
                        })}
                        value={porcentaje}
                        text={`${porcentaje}% Gastado`}
                    
                    />
                </div>
                <div className="contenido-presupuesto">
                    <button
                        className="reset-app"
                        type="button"
                        onClick={handleResetApp}
                    >
                        Resetear App
                    </button>
                    <p>
                        <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                    </p>
                    <p className={`${disponible < 0 ? "negativo" : ""}`}>
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
