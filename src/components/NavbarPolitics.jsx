import { Link } from "react-router-dom"

export const NavbarPolitics = () => {
    return (
        <section className="w-auto md:object-fill" >
                <nav className="flex flex-col h-auto gap-4 font-bold">
                    <Link className="p-3 text-center border-2 rounded-lg" to="/aviso-legal">Aviso legal</Link>
                    <Link className="p-3 text-center border-2 rounded-lg" to="/politica-privacidad">Política de privacidad</Link>
                    <Link className="p-3 text-center border-2 rounded-lg" to="/politica-cookies">Política de Cookies</Link>
                </nav>
            </section>
    )
}