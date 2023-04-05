import { Gasto } from './Gasto';


export const ListadoGastos = ({gastos, setGastoEditar}) => {
  return (
    <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'Gastos' : 'No Hay Gastos aún'}</h2>

        {gastos.map( gasto => (
            <Gasto 
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar} // Se pasa para llevar en control cual gasto se requiere editar
            />
        ))} 
        {/* Aqui en este map se recibe gastos del useState de App.jsx, se crea una variable para pasar la key y el resto del objeto */}
    </div>
  )
}
