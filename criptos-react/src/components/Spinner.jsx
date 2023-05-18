import '../styles/Spinner.css'; // Se importa con la extension porque es un archivo css y para que react lo pueda reconocer a los hooks, componentes y helpers (js) no se importan con su extension porque no es necesario

export const Spinner = () => {
    return (
        <>
            <div className="sk-cube-grid">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
            </div>
        </>
    )
}
