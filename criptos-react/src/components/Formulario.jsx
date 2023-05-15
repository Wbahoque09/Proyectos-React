import { monedas } from '../data/monedas';
import { useSelectMonedas } from '../hooks/useSelectMonedas';
import styled from '@emotion/styled';


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    margin-top: 30px;
    transition: background-color .3s ease; /* Investigar mas sobre este efecto */

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

export const Formulario = () => {

    const [ moneda, SelectMonedas ] = useSelectMonedas("Elige tu moneda", monedas); // Aqui ponemos el mismo nombre como se declaro para llamar a la funcion, Nota se retorna por indice del arreglo.
    // las monedas se traen por el archivos monedas

    // SelectMonedas(); // Aqui se llamo a la funcion

    return (
        <>
            <form>
                {/* Se declara el SelectMoneda como componente, investigar mas... */}
                <SelectMonedas /> 
                
                <InputSubmit type="submit" value={"Cotizar"} />
            </form>
        </>
    )
}
