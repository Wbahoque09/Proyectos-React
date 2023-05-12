import { useState } from 'react';
import styled from '@emotion/styled'; // Para utlizar styled component se empieza con esta importacion

const Heading = styled.h1`
  font-family: 'Nunito', sans-serif;
  color: #FFF;
`

export const App = () => {

  return (
    <>
      <Heading>App location</Heading>
    </>
  )
}




// Nota con styled components, primero se añaden las respectivas dependencias para que funcionen "yarn add @emotion/react @emotion/styled", segundo se hace la importacion de la linea 2, tercero para utilizar y agregar estilos se hace el proceso que se ve en la linea 4 a la 7, otra nota aclaratorio los nombres de las variables "CSS" empiezan en mayusculas como los componentes de react y dentro del return para agregar estos estilos se cambia el elemnto html por nombre de la variable creada.
