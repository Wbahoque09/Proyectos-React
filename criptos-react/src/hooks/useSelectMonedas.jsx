
import styled from '@emotion/styled';

// eslint-disable-next-line react-refresh/only-export-components
const Label = styled.label`
    color: #FFF;
`
// Label y opciones se reciben de Formulario .jsx
export const useSelectMonedas = (label, opciones) => {
    
    const SelectMonedas = () => (
        <>
            <Label htmlFor="Moneda">{label}</Label>
            <select name="Moneda" id="">
                <option value="">Seleccione</option>
                {opciones.map( opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </select>
        </>
    )

    return [ SelectMonedas ] // Aqui retornamos en un array para poder usarlo en otro lado de la app.
}


// Creador de hooks: No regresan un return como componente jsx, regresan un objeto o un arreglo.
// Hooks: Una de las razones de la creacion de hooks es para poder re-utilizar una función.
// Tambien se puede crear una funcion Helper, pero existe otra gran ventaja de crear tus propios Hooks y es la de incorporar State y mantener el valor de una funcion de forma persistente.
// Ventajas: El codigo personalizado tendrá todas las ventajas de React como son: state, effects, integrar otros hooks y el performance.
// Re-utilizable en otros proyectos y lugares de tu página. 
