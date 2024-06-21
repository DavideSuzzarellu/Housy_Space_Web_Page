import { useState } from "react"
import { Offcanvas } from './Offcanvas';
import { Link } from "react-router-dom" 
export const Navbar = () => {
    const [ showOffcanvas, setShowOffcanvas ] = useState(false)

    return (
        <header className="sticky flex items-center justify-between w-full px-4 py-2 mx-auto bg-white border-b-4 border-pantole-dark">
            <div className="w-full text-white lg:w-1/3">
                <Link to="/">
                    <img src="/images/logo.svg" alt="Logo Housy Space" className="h-14 ms-10" />
                </Link>
            </div>
            <button onClick={() => setShowOffcanvas(true)} className="lg:hidden">
                <img src="/images/toggle.svg" alt="Toggle button" className="size-10 pantone-dark"  />
            </button>
            <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}/>
            <nav className="justify-around hidden w-2/3 font-bold lg:flex font-montserrat text-pantone-light">
                <Link className='px-4 py-2 active:text-pantole-dark hover:scale-[0.9] transition duration-200' to="/alquiler">Alquiler</Link>
                <Link className='px-4 py-2 active:text-pantole-dark hover:scale-[0.9] transition duration-200' to="/venta">Venta</Link>
                <Link className='px-4 py-2 active:text-pantole-dark hover:scale-[0.9] transition duration-200 ' to="/compra">Compra</Link>
                <Link className='px-4 py-2 active:text-pantole-dark hover:scale-[0.9] transition duration-200' to="/aboutUs">Sobre nosotros</Link>
                <Link className='px-4 py-2 active:text-pantole-dark hover:scale-[0.9] transition duration-200' to="/contacto">Contacto</Link>
            </nav>
        </header>
    )
}