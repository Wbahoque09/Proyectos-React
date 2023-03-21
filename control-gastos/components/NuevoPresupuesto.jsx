import { useState } from 'react';
import { Mensaje } from './Mensaje';


export const NuevoPresupuesto = ( {presupuesto, setPresupuesto, setIsValidPresupuesto} ) => {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto < 0){
            setMensaje("No es un presupuesto válido");
            return
        }
        setMensaje(''); // Esto se hace para no mostrar mensaje por si se escribe bien el presupuesto
        setIsValidPresupuesto(true);
    }

    return (
        <>
            <div className="contenedor-presupuesto contenedor sombra">
                <form onSubmit={handlePresupuesto} className="formulario">
                    <div className="campo">
                        <label htmlFor="">Definir Presupuesto</label>
                        <input 
                            className="nuevo-presupuesto"
                            type="number"
                            placeholder="Añade tu Presupuesto"
                            value={presupuesto}
                            onChange={(e) => setPresupuesto(e.target.value)} // El onChange es para cambiar y leer el cambio del input
                        />
                    </div>
                    <input type="submit" value="Añadir" />
                    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                    {/* Se le pasa al componente mensaje el tipo y el children, el children es el mensaje como tal entre corchetes */}
                </form>
            </div>
        </>
    )
}
