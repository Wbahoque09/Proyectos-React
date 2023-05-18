/* eslint-disable react/prop-types */
import styled from '@emotion/styled';

const Resultado1 = styled.div`
    color: #FFF;
    font-family: "Nunito", sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
    /* Averiguar mas sobre como aplicar css a un span de manera general */
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`

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
            <Resultado1>
                {/* A la imagen hay que pasarle el link de la pagina de cripto para poner mostrar la imagen porque la imagen es estatica*/}
                <Imagen 
                    src={`https://www.cryptocompare.com/${IMAGEURL}`} 
                    alt="imagen cripto" 
                />
                <div>
                    <Precio>El precio es de: <span>{PRICE}</span></Precio>
                    <Texto>Precio más alto del dia: <span>{HIGHDAY}</span></Texto>
                    <Texto>Precio más bajo del dia: <span>{LOWDAY}</span></Texto>
                    <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                    <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
                </div>
            </Resultado1>
        </>
        
    )
}
