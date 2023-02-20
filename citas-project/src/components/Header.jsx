

export const Header = () => {

    return(

        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimientos Pacientes {""}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
        </>

    )


}

// Nota importante: Para llamar un componente en react lo que importa es que se mande la exportacion con la primera palabra en mayuscula, Los nombre que se le dan al componente al momento de crearlos se aplica lo mismo pero por "buenas practicas"