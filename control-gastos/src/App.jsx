import { useState } from 'react';
import { Header } from '../components/Header';



export const App = () => {
  
  const [presupuesto, setPresupuesto] = useState(0); // Este useState es creado para controlar el presupuesto
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false); // Este useState sirve para para la validacion del presupuesto

  return (
    <>
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      </div>
    </>  
  )
}

// Todo useState que se declare en el componente principal es por que se va a manejar en varios componentes

