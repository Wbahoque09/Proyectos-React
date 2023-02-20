import { Header } from './components/Header';
import { Formulario } from './components/Formulario';
import { ListadoPaciente } from './components/ListadoPaciente';


function App() {
  
  // <div className="App">
  //     <h1>{'Hello World'.toLowerCase()}</h1> {/* Se pone los corchetes para realizar metodos JS y estos no se muestren como textos, solo se imprimen expresiones*/}
  //   </div> Representacion jsx

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Formulario />
          <ListadoPaciente />
        </div>
      </div>
    </>
  )
}

export default App;
