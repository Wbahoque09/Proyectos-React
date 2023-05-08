import { Gasto } from './Gasto';


export const ListadoGastos = ({
  gastos, 
  setGastoEditar, 
  eliminarGasto,
  filtro,
  filtroGastos,
}) => {
  return (
    <div className="listado-gastos contenedor">

        { filtro ? (
            <>
              <h2>{filtroGastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
              {filtroGastos.map( gasto => (
                <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar} // Se pasa para llevar en control cual gasto se requiere editar
                  eliminarGasto={eliminarGasto} // Se pasa para llevar el control de cual gasto se va a eliminar
                />
              ))}
            </>
          ) : 
          (
            <>
              <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>
              {gastos.map( gasto => (
                <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar} // Se pasa para llevar en control cual gasto se requiere editar
                  eliminarGasto={eliminarGasto} // Se pasa para llevar el control de cual gasto se va a eliminar
                />
              ))}
            </>
          )
        } 
        {/* Aqui en este map se recibe gastos del useState de App.jsx, se crea una variable para pasar la key y el resto del objeto */}
    </div>
  )
}
