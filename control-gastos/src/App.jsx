import { useState } from 'react';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';
import IconoImg from './assets/img/nuevo-gasto.svg';



export const App = () => {
  
  const [presupuesto, setPresupuesto] = useState(0); // Este useState es creado para controlar el presupuesto
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false); // Este useState sirve para para la validacion del presupuesto
  const [modal, setModal] = useState(false); // Se utiliza este State para controlar la visualizacion de la ventana modal
  const [animarModal, setAnimarModal] = useState(false); // Este useState se utiliza para controlar la visualizacion de la animacion (css)
  const [gastos, setGastos] = useState([]); // Este useState se usa para guardar el estado de los datos del formulario por medio de la funcion "guardarGasto"

  const handleNuevoGasto = () => {
    setModal(true); // Aqui se habilita la vista del modal

    setTimeout(() => {
      setAnimarModal(true); // Aqui se cambia el useState para mostrar en el modal las animaciones
    }, 870); // Este setTimeout se crea para tratar animaciones desde el css
  }

  const guardarGasto = (gasto) => {
    console.log(gasto);
  } // Este es el "ejemplo" de como el padre le pide al componente hijo informacion

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
            animarModal={animarModal} // Lo mismo del anterior
            setAnimarModal={setAnimarModal} // Lo mismo del anterior
            guardarGasto={guardarGasto} // Se pasa para "traer" los datos obtenidos en el formulario del modal
          />}
      </div>
    </>  
  )
}

// Todo useState que se declare en el componente principal es por que se va a manejar en varios componentes

