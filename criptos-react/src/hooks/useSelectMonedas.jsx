import { useState } from 'react';
import styled from '@emotion/styled';


// eslint-disable-next-line react-refresh/only-export-components
const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: "nunito", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
// eslint-disable-next-line react-refresh/only-export-components
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`

// Label y opciones se reciben de Formulario .jsx
export const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState(""); // Declaracion del state de forma general porque se va a reutilizar en otros compenentes 
    
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={ (e) => setState( e.target.value ) }
            >
                <option value="">Seleccione</option>
                {opciones.map( opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </Select>
        </>
    )

    return [ state, SelectMonedas ] // Aqui retornamos en un array para poder usarlo en otro lado de la app.
}


// Creador de hooks: No regresan un return como componente jsx, regresan un objeto o un arreglo.
// Hooks: Una de las razones de la creacion de hooks es para poder re-utilizar una función.
// Tambien se puede crear una funcion Helper, pero existe otra gran ventaja de crear tus propios Hooks y es la de incorporar State y mantener el valor de una funcion de forma persistente.
// Ventajas: El codigo personalizado tendrá todas las ventajas de React como son: state, effects, integrar otros hooks y el performance.
// Re-utilizable en otros proyectos y lugares de tu página. 
