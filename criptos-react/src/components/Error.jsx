import styled from '@emotion/styled';

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    text-align: center;
`

// eslint-disable-next-line react/prop-types
export const Error = ({children}) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}                                                   
