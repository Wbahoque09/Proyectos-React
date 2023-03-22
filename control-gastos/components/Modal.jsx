import CerrarModalImg from '../src/assets/img/cerrar.svg';

export const Modal = ({setModal}) => {

    const ocultarModal = () => {
        setModal(false); // Se recibe para volver a configurar la vista del setModal
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
        </div>
    </>
  )
}
