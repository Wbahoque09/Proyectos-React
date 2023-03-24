

export const Gasto = ({gasto}) => {

  const {categoria, nombre, cantidad, id} = gasto; // Desestructuracion de gasto

  return (
    <>
        <div className="gasto sombra">
            <div className="contenido-gasto">

              <div className="descripcion-gasto">
                <p className="categoria">{categoria}</p>
                <p className="nombre-gasto">{nombre}</p>
              </div>

            </div>
        </div>
    </>
  )
}
