/* eslint-disable react/prop-types */

export const Cliente = ({cliente}) => {

    const {id,nombre,telefono,email,emppresa} = cliente; // Desestructuracion de cliente para acceder mas facil a sus atributos

    return (
        <>
            <tr>
                <td className="p-6">
                    {nombre}
                </td>
            </tr>
        </>
    )
}
