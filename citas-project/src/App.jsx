import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListadoPaciente } from './components/ListadoPaciente';



function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, []); // Este useEffect se utiliza para obtener lo que tenga el localStorage y no se pierda lo que se haya guardado
  
  
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify( pacientes ));
  }, [pacientes]); // Aqui en este useEffect se le pasa lo que tiene el useEffect de pacientes

  // El orden de los useEffwct importa porque se van a ejecutar en el orden en que se declaran
  
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id );
    setPacientes(pacientesActualizados);
  }

  // const sumaPrueba = () => {
  //   console.log(2 + 2);
  // }
  // const toma1Valor = (valor) => {
  //   console.log(valor);
  // }
  
  // <div className="App">
  //     <h1>{'Hello World'.toLowerCase()}</h1> {/* Se pone los corchetes para realizar metodos JS y estos no se muestren como textos, solo se imprimen expresiones*/}
  //   </div> Representacion jsx

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header
          // numeros={1}
          // isAdmin={false}
          // fn={sumaPrueba}
          // toma1Valor={toma1Valor}
        />
        <div className="mt-12 md:flex">
          <Formulario 
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPaciente 
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>
      </div>
    </>
  )
}

export default App;


// Los props o propiedades se utilizan para pasar los componentes del padre al hijo, para hacerlo viceversa no es reconmendable hacerlo y si se llegase a usar se tienen que hacer varias cosas. 
// Si hay un useState que se va a pasar por diferentes componentes, lo mejor es colocarlo en el archivo principal
