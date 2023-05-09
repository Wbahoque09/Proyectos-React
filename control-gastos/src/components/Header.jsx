import { ControlPresupuesto } from './ControlPresupuesto';
import { NuevoPresupuesto } from './NuevoPresupuesto';

export const Header = ({
    gastos, 
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto,
    setGastos,
}) => {
    return (
        <>
            <header>
                <h1>Planificador de Gastos</h1>
                {isValidPresupuesto ? (
                    <ControlPresupuesto 
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto} // Se pasa para borrar los datos del presupuesto del localstorage 
                        gastos={gastos} // Se siguen pasando por aqui para los calculos
                        setGastos={setGastos} // Se pasa para borrar los datos de los gastos del localstorage
                        setIsValidPresupuesto={setIsValidPresupuesto} // Se pasa para actualizar la ventana que muestra si hay presupuesto
                    />
                ): (
                    <NuevoPresupuesto
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        setIsValidPresupuesto={setIsValidPresupuesto}
                    />
                )}
            </header>
        </>
    )
}
