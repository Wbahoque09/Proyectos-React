

export const ControlPresupuesto = ({presupuesto}) => {
  return (
    <>
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                Grafica aqui
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {presupuesto}
                </p>
            </div>
        </div>
    </>
  )
}
