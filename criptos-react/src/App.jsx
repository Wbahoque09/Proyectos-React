import { useState, useEffect } from 'react';
import styled from '@emotion/styled'; // Para utlizar styled component se empieza con esta importacion
import { Formulario } from './components/Formulario';
import imagenCripto from './assets/img/imagen-criptos.png';


const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) { // Tambien se puede implementar @mediaquerys
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

// Este es el ejemplo de la nota de abajo.
const Heading = styled.h1`
  font-family: "Nunito", sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
  /* el after es con se crea el la barra (investigar mas sobre esto) */
`

export const App = () => {

  const [monedas, setMonedas] = useState({}); // Se crea este state para tener informacion sobre la eleccion del usuario con las monedas
  const [resultado, setResultado] = useState({}); // Se crea este state para almacenar los datos de la consulta Fecht API

  useEffect(() => {
    if (Object.keys(monedas).length > 0) { // Metodo para comprobrar si hay algo en el objeto
      
      const cotizarCripto = async () => { // funcion asincronica para hacer peticion a la API
        const { moneda, criptomoneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        console.log(url);

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setResultado(resultado.DISPLAY[criptomoneda][moneda]); // Se pasa los datos a guardar del fecht, se accede por arrays para hacer la consulta dinamica

      }

      cotizarCripto(); // Llamado o invocacion de la funcion asincrona
    }
  }, [monedas]) // Este effect se "disparara" cuando monedas tenga algo y nos servira para realizar otra consulta fecht API
  

  return (
    <>
      <Contenedor>
        <Imagen
          src={imagenCripto}
          alt="imagenes cripto"
          // Para crear o insertar la imagen se declara como componente, debo investigar sobre el tema, se pasan como props los atributos de la imagen.  
        />
        <div>
          <Heading>Cotiza Criptomonedas al instante</Heading>

          <Formulario
            setMonedas={setMonedas} // Se pasa via props el modificador del state para recibir la informacion de las monedas seleccionadas
          />
        </div>
        
      </Contenedor>
    </>
  )
}




// Nota con styled components, primero se añaden las respectivas dependencias para que funcionen "yarn add @emotion/react @emotion/styled", segundo se hace la importacion de la linea 2, tercero para utilizar y agregar estilos se hace el proceso que se ve en la linea 4 a la 7, otra nota aclaratorio los nombres de las variables "CSS" empiezan en mayusculas como los componentes de react y dentro del return para agregar estos estilos se cambia el elemnto html por nombre de la variable creada.
