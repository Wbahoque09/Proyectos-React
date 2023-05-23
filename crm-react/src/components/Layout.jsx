import { Outlet, Link, useLocation } from 'react-router-dom';

export const Layout = () => {

    const location = useLocation(); // El useLocation sirve para poder ver la ubicacion y pasarla en el Link

    return (
        <>
            <div className="md:flex md:min-h-screen">
                <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
                    <h2 className="text-4xl font-black text-center text-white">CRM - Clientes</h2>

                    <nav className="mt-10">
                        {/* Ir a Generalidades para explicacion de <Link/> */}
                        <Link className={`${location.pathname === "/" ? "text-blue-300" : "text-white"} text-2xl block mt-2 hover:text-blue-300`}to="/">Clientes</Link>
                        <Link className={`${location.pathname === "/clientes/nuevo" ? "text-blue-300" : "text-white"} text-2xl block mt-2 hover:text-blue-300`} to="/clientes/nuevo">Nuevos Clientes</Link>
                    </nav>
                </aside>

                <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
                    <Outlet />
                </main>

            </div>
        </>
    )
}
