import {useEffect, useState} from 'react';

export const Filtros = ({filtro, setFiltro}) => {
    return (
        <>
            <div className="filtros sombra contenedor">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="campo">
                        <label>Filtrar Gastos</label>
                        <select
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                        >
                            <option value="">-- Todas las categorias --</option>
                            <option value="ahorro">Ahorro</option>
                            <option value="comida">Comida</option>
                            <option value="casa">Casa</option>
                            <option value="gastos">Gastos Varios</option>
                            <option value="motel">Motel</option>
                            <option value="salud">Salud</option>
                            <option value="suscripciones">Suscripciones</option>
                        </select>
                    </div>
                </form>
            </div>
        </>
    )
}
