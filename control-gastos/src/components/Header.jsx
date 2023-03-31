import { ControlPresupuesto } from './ControlPresupuesto';
import { NuevoPresupuesto } from './NuevoPresupuesto';

export const Header = ({
    gastos, 
    presupuesto, 
    setPresupuesto, 
    isValidPresupuesto, 
    setIsValidPresupuesto 
}) => {
    return (
        <>
            <header>
                <h1>Planificador de Gastos</h1>
                {isValidPresupuesto ? (
                    <ControlPresupuesto 
                        presupuesto={presupuesto}
                        gastos={gastos} // Se siguen pasando por aqui para los calculos
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
