import { useState, useEffect } from 'react';

import CerrarModalImg from '../assets/img/cerrar.svg';
import { Mensaje } from './Mensaje';

export const Modal = ({
    setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGasto,
    gastoEditar
}) => {

    const [mensaje, setMensaje] = useState("");
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [categoria, setCategoria] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
        }
    }, []); // Este useEffect se crea para que el componente se monte cuando este listo
    

    const ocultarModal = () => {

        setAnimarModal(false); // Lo mismo del anterior

        setTimeout(() => {
            setModal(false); // Se recibe para volver a configurar la vista del setModal            
        }, 780);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if ([ nombre, cantidad, categoria].includes("")) {
            setMensaje("Todos los campos son obligatorios");

            setTimeout(() => {
                setMensaje("");
            }, 2000); // Este setTimeout es para quitar o ocultar el mensaje despues de un determinado tiempo
            return;
        }

        guardarGasto({nombre, cantidad, categoria}); // Aqui se pasan al App.jsx los datos del formulario
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
            <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar" : "cerrar"}`}
            > 
            {/* En la className anterior se puede ver como tratar clases css de manera dinamica en react */}
                <legend>{gastoEditar.nombre ? "Editar Gasto" : "Nuevo Gasto"}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <div className="campo">
                    <label htmlFor="nombre">Nombre Gastos</label>

                    <input
                        id="nombre"
                        type="text"
                        placeholder="Añade el Nombre del Gasto"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>

                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Añade la cantidad del gasto: ej. 300"
                        value={cantidad}
                        onChange={(e) => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="categoria">Categoria</label>

                    <select 
                        id="categoria"
                        value={categoria}
                        onChange={ (e) => setCategoria(e.target.value)}
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
                    value={ gastoEditar.nombre ? "Guardar Cambios" : "Añadir Gasto"}
                />
            </form>
        </div>
    </>
  )
}
