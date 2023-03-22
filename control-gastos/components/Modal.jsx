import CerrarModalImg from '../src/assets/img/cerrar.svg';

export const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {

        setAnimarModal(false); // Lo mismo del anterior

        setTimeout(() => {
            setModal(false); // Se recibe para volver a configurar la vista del setModal            
        }, 780);
    }

  return (
    <>
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CerrarModalImg} 
                    alt="Cerrar Modal"
                    onClick={ocultarModal}
                />
            </div>
            <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}> 
            {/* En la className anterior se puede ver como tratar clases css de manera dinamica en react */}
                <legend>Nuevo Gasto</legend>

                <div className="campo">
                    <label htmlFor="nombre">Nombre Gastos</label>

                    <input
                        id="nombre"
                        type="text"
                        placeholder="Añade el Nombre del Gasto"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>

                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Añade la cantidad del gasto: ej. 300"
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>

                    <select 
                        name="" 
                        id="categoria"
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="motel">Motel</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                    
                </div>
                <input 
                    type="submit"
                    value="Añadir Gasto"
                />
            </form>
        </div>
    </>
  )
}
