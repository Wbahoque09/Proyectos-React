/* eslint-disable react/prop-types */
import styled from '@emotion/styled';

// eslint-disable-next-line react/prop-types
export const Resultado = ({resultado}) => {
    const { 
        PRICE, 
        HIGHDAY, 
        LOWDAY,
        CHANGEPCT24HOUR,
        IMAGEURL,
        LASTUPDATE,
    } = resultado; // desestructuracion del state resultado
    return (
        <>
            <div>
                <p>El precio es de: <span>{PRICE}</span></p>
                <p>Precio más alto del dia: <span>{HIGHDAY}</span></p>
                <p>Precio más bajo del dia: <span>{LOWDAY}</span></p>
                <p>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
                <p>Última Actualización: <span>{LASTUPDATE}</span></p>
            </div>
        </>
        
    )
}
