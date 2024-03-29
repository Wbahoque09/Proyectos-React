import { useEffect, useState } from 'react';
import { monedas } from '../data/monedas';
import { Error } from './Error';
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

// eslint-disable-next-line react/prop-types
export const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [ moneda, SelectMonedas ] = useSelectMonedas("Elige tu moneda", monedas); // Aqui ponemos el mismo nombre como se declaro para llamar a la funcion, Nota se retorna por indice del arreglo.
    // las monedas se traen por el archivos monedas
    const [ criptomoneda, SelectCriptomoneda ] = useSelectMonedas("Elige tu Criptomoneda", criptos); // Se crea otro label y select utilizando el customHook.

    // SelectMonedas(); // Aqui se llamo a la funcion

    useEffect(() => {
        
        const consultarApi = async () => { // Esta funcion se crea para no utilizar el useEffect de manera asincrona
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url); // Con el await nos aseguramos de que se la anterior tarea haya finalizado
            const resultado = await respuesta.json() // Aqui convertimos la respuesta en JSON
            // console.log(resultado.Data);

            const arrayCriptos = resultado.Data.map( (cripto) => { // Se hace un .map al resultado para acceder a los datos que mas nos interesan
                const objeto = { // Se crea un objeto para guardar la informacion y utilizarla mas adelante
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName, // Se pasa esa propiedad con el nombre por como se recibe en el customHook
                }
                return objeto;
            })

            setCriptos(arrayCriptos); // Se llena el state de criptos

        }
        
        consultarApi(); // Se llama o ejecuta la funcion


    }, []) // Este useEffect se crea para hacer la consulta de las criptomondeas y se ejecuta una sola vez.
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if ([moneda,criptomoneda].includes("")) { // Esta condicion es para validacion (No esten vacios) de los campos en el formulario 
            
            setError(true);

            return;
        }

        setError(false); // Se pasa a false el state para que no muestre el mensaje de error
        setMonedas({ // Se pasa la informacion al App.jsx por medio de la funcion actualizadora, se le mandan la informacion del state del customHook.
            moneda, 
            criptomoneda
        })
    }

    return (
        <>
            {/* Se pasa el state de error para mostrar el componente que contiene un mensaje, el mensaje se pasa como children */}
            {error && <Error>Todos los campos son obligatorios</Error>} 
            <form
                onSubmit={handleSubmit} // Se crea esta funcion para manejar el envio de datos por el formulario (Boton Submit)
            >
                {/* Se declara el SelectMoneda como componente, investigar mas... */}
                <SelectMonedas />

                <SelectCriptomoneda />
                
                <InputSubmit type="submit" value={"Cotizar"} />
            </form>
        </>
    )
}
