import { useState } from 'react';
import { Mensaje } from './Mensaje';


export const NuevoPresupuesto = ( {presupuesto, setPresupuesto, setIsValidPresupuesto} ) => {

    const [mensaje, setMensaje] = useState('');

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto <= 0){
            setMensaje("No es un presupuesto válido");
            setTimeout(() => {
                setMensaje(''); // Se controla el tiempo de visualizacion del mensaje y se vuelve a ocultar
            }, 1500);
            
            return
        }
        setMensaje(''); // Esto se hace para no mostrar mensaje por si se escribe bien el presupuesto
        setIsValidPresupuesto(true); // Se le pasa la funcion modificadora del state en App.jsx y se coloca en true para que desde el componente Header.jsx se pueda validar si se muestra un Nuevo componente o se muestra el inicio para definir el presupuesto
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
