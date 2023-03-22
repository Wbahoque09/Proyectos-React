import { useState } from 'react';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';
import IconoImg from './assets/img/nuevo-gasto.svg';



export const App = () => {
  
  const [presupuesto, setPresupuesto] = useState(0); // Este useState es creado para controlar el presupuesto
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false); // Este useState sirve para para la validacion del presupuesto
  const [modal, setModal] = useState(false); // Se utiliza este State para controlar la visualizacion de la ventana modal

  const handleNuevoGasto = () => {
    setModal(true); // Aqui se habilita la vista del modal
  }

  return (
    <>
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
        {isValidPresupuesto && (
          <div className="nuevo-gasto">
            <img
              src={IconoImg}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        )}

        {modal && 
        <Modal
        setModal={setModal} // Se pasa como property para configurar la vista del modal
        />}
      </div>
    </>  
  )
}

// Todo useState que se declare en el componente principal es por que se va a manejar en varios componentes

