
import styled from '@emotion/styled';

const Label = styled.label`
    color: #FFF;
`

export const useSelectMonedas = (label) => {
    
    const SelectMonedas = () => (
        <>
            <Label htmlFor="Moneda">{label}</Label>
        </>
    )

    return [ SelectMonedas ] // Aqui retornamos en un array para poder usarlo en otro lado de la app.
}


// Creador de hooks: No regresan un return como componente jsx, regresan un objeto o un arreglo.
// Hooks: Una de las razones de la creacion de hooks es para poder re-utilizar una función.
// Tambien se puede crear una funcion Helper, pero existe otra gran ventaja de crear tus propios Hooks y es la de incorporar State y mantener el valor de una funcion de forma persistente.
// Ventajas: El codigo personalizado tendrá todas las ventajas de React como son: state, effects, integrar otros hooks y el performance.
// Re-utilizable en otros proyectos y lugares de tu página. 
