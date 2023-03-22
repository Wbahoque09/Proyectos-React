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
            <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}> 
            {/* En la className anterior se puede ver como tratar clases css de manera dinamica en react */}
                <legend>Nuevo Gasto</legend>
            </form>
        </div>
    </>
  )
}
