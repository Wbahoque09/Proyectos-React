import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { formatearFecha } from '../helpers';

import IconoAhorro from '../assets/img/icono_ahorro.svg';
import IconoCasa from '../assets/img/icono_casa.svg';
import IconoComida from '../assets/img/icono_comida.svg';
import IconoGastos from '../assets/img/icono_gastos.svg';
import IconoOcio from '../assets/img/icono_ocio.svg';
import IconoSalud from '../assets/img/icono_salud.svg';
import IconoSuscripciones from '../assets/img/icono_suscripciones.svg';

export const Gasto = ({gasto, setGastoEditar, eliminarGasto}) => {

  const diccionariosIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    motel: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones,
  } // Este diccionario se crea para continuar con el dinamismo y poder buscar la imagen al gasto indicado

  const {categoria, nombre, cantidad, id, fecha} = gasto; // Desestructuracion de gasto

  const formatearCantidad = (cantidad) => {
    return Number(cantidad).toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP'
    });
  }

  const eliminar = () => {
    eliminarGasto(id);
    setGastoEditar({});
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
        onClick={eliminar} // Cree esta funcion para poder pasar el id a eliminar y para vaciar el state de setGastoEditar.
        destructive={true}
      > 
        Eliminar
      </SwipeAction>
    </TrailingActions>
    // En el onclick del SwipeAction se le pasa la funcion via prop que viene del app.jsx y se le manda el id del gasto a eliminar
  )

  return (
    <>
      <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
        >
          <div className="gasto sombra">
              <div className="contenido-gasto">
                <img
                  src={diccionariosIconos[categoria]}
                  alt={`Icono ${categoria}`}
                />
                <div className="descripcion-gasto">
                  <p className="categoria">{categoria}</p>
                  <p className="nombre-gasto">{nombre}</p>
                  <p className="fecha-gasto">
                    Agregado el: {''}
                    <span>{formatearFecha(fecha)}</span>
                  </p>
                </div>

              </div>
              <p className="cantidad-gasto">{formatearCantidad(cantidad)}</p>
          </div>
        </SwipeableListItem>
      </SwipeableList>
    </>
  )
}
