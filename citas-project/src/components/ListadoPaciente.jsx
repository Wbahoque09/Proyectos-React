// import { useEffect } from 'react';
import { Paciente } from './Paciente';




export const ListadoPaciente = ({pacientes,setPaciente}) => {

  // console.log(pacientes);
  // console.log(pacientes && pacientes.length);

  // useEffect(() => {
  //   if (pacientes.length > 0) {
  //     console.log("Nuevo paciente agregado");
  //   }
        
  //   }, [pacientes]);

  return (
    <>
      <div className="md:m-1/2  lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>

            {pacientes.map( (paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
              /> 
            ))}
            {/* Cuando se haga un .map siempre se debe pasar una key en lasprops para evitar errores */} 

          </>
        )
        : (
          <>
            <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
            </p>
          </>
        )}

        

      </div>
    </>
  )
}
