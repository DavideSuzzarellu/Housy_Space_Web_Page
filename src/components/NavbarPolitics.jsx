import { Link } from "react-router-dom"

export const NavbarPolitics = () => {
    return (
        <section className="w-auto md:object-fill" >
            <nav className="flex flex-col h-auto gap-4 font-bold text-pantone-light">
                <Link className="p-3 text-center transition duration-200 border-2 rounded-lg shadow-md bg-opacity-80 hover:bg-opacity-100 active:text-pantole-dark hover:shadow-sm active:shadow-none active:scale-95 hover:bg-slate-50" to="/aviso-legal">Aviso legal</Link>
                <Link className="p-3 text-center transition duration-200 border-2 rounded-lg shadow-md bg-opacity-80 hover:bg-opacity-100 active:text-pantole-dark hover:shadow-sm active:shadow-none active:scale-95 hover:bg-slate-50" to="/politica-privacidad">Política de privacidad</Link>
                <Link className="p-3 text-center transition duration-200 ease-in-out border-2 rounded-lg shadow-md bg-opacity-80 hover:bg-opacity-100 active:text-pantole-dark hover:shadow-sm active:shadow-none active:scale-95 hover:bg-slate-50" to="/politica-cookies">Política de Cookies</Link>
            </nav>
        </section>
    )
}