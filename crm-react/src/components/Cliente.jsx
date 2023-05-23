/* eslint-disable react/prop-types */

export const Cliente = ({cliente}) => {

    const {id,nombre,telefono,email,empresa} = cliente; // Desestructuracion de cliente para acceder mas facil a sus atributos

    return (
        <>
            <tr className="border-b">
                <td className="p-6 space-y-2">
                    <p className="text-2xl text-gray-800">{nombre}</p>
                    <p>{empresa}</p>
                </td>

                <td className="p-6">
                    <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Email: </span>{email}</p>
                    <p className="text-gray-600"><span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono}</p>
                </td>
            </tr>
        </>
    )
}
