import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ListadoGastos } from './components/ListadoGastos';
import { Modal } from './components/Modal';
import { generarID } from '../src/helpers';
import IconoImg from './assets/img/nuevo-gasto.svg';
import { Filtros } from './components/Filtros';

export const App = () => {
  
  const [presupuesto, setPresupuesto] = useState(
    localStorage.getItem("presupuesto") ?? 0
  ); // Este useState es creado para controlar el presupuesto y traer lo que hay almacenado en el localstorage
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false); // Este useState sirve para la validacion del presupuesto
  const [modal, setModal] = useState(false); // Se utiliza este State para controlar la visualizacion de la ventana modal
  const [animarModal, setAnimarModal] = useState(false); // Este useState se utiliza para controlar la visualizacion de la animacion (css)
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos") ? JSON.parse(localStorage.getItem("gastos")) : []
  ); // Este useState se usa para guardar el estado de los datos del formulario por medio de la funcion "guardarGasto" y trae los items de gastos guardados en localstorage
  const [gastoEditar, setGastoEditar] = useState({}); // Este useState se crea para pasar al modal y revisar si hay que editar
  const [filtro, setFiltro] = useState(''); // Este useState se crea para tener en el estado el filtro a buscar
  const [filtroGastos, setFiltroGastos] = useState([]); // Este useState se crea para mantener los resultados de los filtros

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true); // Aqui se habilita la vista del modal

      setTimeout(() => {
        setAnimarModal(true); // Aqui se cambia el useState para mostrar en el modal las animaciones
      }, 870); // Este setTimeout se crea para tratar animaciones desde el css
    }
  }, [gastoEditar]) // Este useEffect se crea para llamar o activar al modal cada vez que se vaya a editar un gasto

  useEffect(() => {
    Number(localStorage.setItem("presupuesto", presupuesto) ?? 0);
  }, [presupuesto]) // Este useEffect se crea para para escuchar los cambios en el presupuesto

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos) ?? [] );
  }, [gastos]) // Este useEffect se crea para guardar los gastos en localStorage
  
  useEffect(() => {
    if (presupuesto > 0) {
      setIsValidPresupuesto(true);
    }
  }, []) // Este useEffect se crea para comprobar si hay presupuesto valido
  
  useEffect(() => {
    // Actualizar gastos por categoria
    const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro ); // Aca comparamos la categoria del gasto con el filtro escogido 
    setFiltroGastos(gastosFiltrados); // Se manda para seguir manteniendo la eleccion obtenida
  }, [filtro]) // Este useEffect se crea para verificar si hay cambio en el select de la busqueda
  
  
  const handleNuevoGasto = () => {
    setModal(true); // Aqui se habilita la vista del modal
    setGastoEditar({}); // Esto se hace para evitar que el gasto a editar siga manteniendose aun despues de haberse cerrado

    setTimeout(() => {
      setAnimarModal(true); // Aqui se cambia el useState para mostrar en el modal las animaciones
    }, 870); // Este setTimeout se crea para tratar animaciones desde el css
  }

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      // Actualizar
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? 
        gasto : gastoState ); // Lo que hace esta funcion es recorrer el array de gastos existentes y ubicar por el id el gasto a actualizar, cuando lo encuentra se lo pasa al parametro gasto y se actuzaliza, los demas retornan igual a como llegaron para no perderlos
        // 1 Original
        // 2 Modificado (gasto)
        // 3 Original
        setGastos(gastosActualizados); // Se pasa el arreglo actualizado
        setGastoEditar({}); // Se vuelve a actualizar el gasto a editar para que no quede guardado en el state
    } else {
      // Nuevo Gasto
      gasto.id = generarID(); // Aqui agregamos al objeto el id que se genera
      gasto.fecha = Date.now(); // Aqui agregamos la fecha al objeto
      setGastos([...gastos, gasto]); // Aqui se actualiza el state de gastos, recibiendo lo que viene del componente modal.jsx "gasto"
    }
    
    setAnimarModal(false); // Lo mismo del anterior(setTimeout ubicado en handleNuevoGasto)

        setTimeout(() => {
            setModal(false); // Se recibe para volver a configurar la vista del setModal            
        }, 780);

  } // Este es el "ejemplo" de como el padre le pide al componente hijo informacion, aqui se crea esta funcion para editar gastos

  const eliminarGasto = (id) => {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);

    setGastos(gastosActualizados); // Se pasa el arreglo actualizado
  }

  return (
    <>
      <div className={ modal ? "fijar" : "" }>
        <Header
          gastos={gastos} // Se pasan los gastos para empezar hacer los calculos de presupuestos
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          setGastos={setGastos} // Se pasan la funcion actulizadora de gastos para borrar los datos del localstorage 
        />
        {isValidPresupuesto && (
          <>
          <main>
            {gastos.length ? (
              <Filtros
                filtro={filtro} // Se pasa para extraer la busqueda seleccionada
                setFiltro={setFiltro} // Se pasa para cambiar la busqueda
              />
            ) : 
            ( "" )}
            <ListadoGastos
              gastos={gastos} // Se pasa para verificar si hay gastos y active la siguiente vista de pantalla
              setGastoEditar={setGastoEditar} // Se pasa para ir actualizando el state de gasto
              eliminarGasto={eliminarGasto} // Se pasa para eliminar gasto
              filtro={filtro} // Se pasa para controlar la vista de filtrado
              filtroGastos={filtroGastos} // Se pasa para mostrar el filtro seleccionado
            />
          </main>
            <div className="nuevo-gasto">
              <img
                src={IconoImg}
                alt="icono nuevo gasto"
                onClick={handleNuevoGasto}
              />
            </div>
          </>
        )}

        {modal && 
          <Modal
            setModal={setModal} // Se pasa como property para configurar la vista del modal
            animarModal={animarModal} // Lo mismo del anterior
            setAnimarModal={setAnimarModal} // Lo mismo del anterior
            guardarGasto={guardarGasto} // Se pasa para "traer" los datos obtenidos en el formulario del modal
            gastoEditar={gastoEditar} // Se pasa para que el modal sepa que gasto esta seleccionado
            setGastoEditar={setGastoEditar} // Se pasa para que cuando se oculte el modal, vaciar el objeto
          />
        }
      </div>
    </>  
  )
}

// Todo useState que se declare en el componente principal es por que se va a manejar en varios componentes

