import { useState, useEffect } from 'react';
import { Offcanvas } from './Offcanvas';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [ showOffcanvas, setShowOffcanvas ] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const offsetY = window.scrollY;
            if (offsetY > 70) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="z-20 flex items-center justify-around w-full mx-auto header-skyline">
            <section className='absolute z-10 p-8 bg-white rounded-md shadow-md ms-10 top-30 right-20'>
                <h1 className='font-bold text-pantole-dark font-montserrat'>La solución a la gestión inmobiliaria</h1>
                <h2 className='text-pantole-dark font-montserrat'>Venta de pisos, casas, alquiler</h2>
                <select className='px-3 py-1 border' name="home" id="home">
                    <option className="p-3" value="buy">Comprar</option>
                    <option className='p-3' value="rent">Alquilar</option>
                </select>
            </section>
            <div className={`fixed mb-0 top-0 py-2 z-40 px-4 w-full flex items-center justify-between transition-all duration-200 ease-in-out gap-5 ${isScrolled ? 'bg-white border-b-4 border-pantole-dark' : 'bg-transparent border-transparent'}`}>
                <div className="w-full text-white lg:w-1/3">
                    <Link to="/">
                        <img src="/images/logo.svg" alt="Logo Housy Space" className={`transition-all duration-200 ease-in-out ${!isScrolled ? "invert-[.9] brightness-[.20] contrast-200" : ""} h-14 ms-10`} />
                    </Link>
                </div>
                <button onClick={() => setShowOffcanvas(true)} className="lg:hidden">
                    <img src="/images/toggle.svg" alt="Toggle button" className={`${!isScrolled ? "invert-[.9] brightness-[.20] contrast-200" : ""} size-10`} />
                </button>
                <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} />
                <nav className={`hidden lg:flex w-2/3 items-center justify-around font-montserrat font-bold transition-all duration-200 ease-in-out text-pantone-light ${!isScrolled ? "invert-[.9] brightness-[.20] contrast-200" : ""}`}>
                    <Link className={`hover:scale-95 inline-block px-4 py-2 transition-all ease-in-out duration-100 ${isScrolled ? "border-none" : "hover:border-b-4"}`} to="/alquiler">Alquiler</Link>
                    <Link className={`hover:scale-95 inline-block px-4 py-2 transition-all ease-in-out duration-100 ${isScrolled ? "border-none" : "hover:border-b-4"}`} to="/venta">Venta</Link>
                    <Link className={`hover:scale-95 inline-block px-4 py-2 transition-all ease-in-out duration-100 ${isScrolled ? "border-none" : "hover:border-b-4"}`} to="/compra">Compra</Link>
                    <Link className={`hover:scale-95 inline-block px-4 py-2 transition-all ease-in-out duration-100 ${isScrolled ? "border-none" : "hover:border-b-4"}`} to="/aboutUs">Sobre nosotros</Link>
                    <Link className={`hover:scale-95 inline-block px-4 py-2 transition-all ease-in-out duration-100 ${isScrolled ? "border-none" : "hover:border-b-4"}`} to="/contacto">Contacto</Link>
                </nav>
            </div>
        </header>
    )
}