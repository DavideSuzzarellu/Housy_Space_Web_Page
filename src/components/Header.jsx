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
            <header className="z-20 flex items-center justify-between w-full mx-auto header-skyline">
                <section className='absolute z-10 p-8 bg-white rounded-md shadow-md ms-10 top-30 right-20'>
                    <h1 className='font-bold text-pantole-dark font-montserrat'>La solucion a la gestion inmobiliaria</h1>
                    <h2 className='text-pantole-dark font-montserrat'>Venta de pisos, casas, alquiler</h2>                                
                    <select className='px-3 py-1 border' name="home" id="home">
                        <option className="p-3" value="buy">Comprar</option>
                        <option className='p-3' value="rent">Alquilar</option>
                    </select>
                </section>
                <div className={`fixed top-0 py-2 px-4 w-full flex items-center justify-between gap-5 transition-all ${isScrolled ? 'bg-white border-b-4 border-pantole-dark' : 'bg-rgba(255, 255, 255, 1)'}`} style={{ transition: 'background 0.20s ease-in-out', zIndex: '10' }}>
                    <div className="w-full text-white lg:w-1/3">
                        <Link to="/">
                            <img src="/images/logo.svg" alt="Logo Housy Space" className={`${!isScrolled ? "invert-color" : ""} h-14 ms-10` } />
                        </Link>
                    </div>
                    <button onClick={() => setShowOffcanvas(true)} className="lg:hidden">
                        <img src="/images/toggle.svg" alt="Toggle button" className={` ${!isScrolled ? "invert-color" : ""} size-10 `}  />
                    </button>
                    <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}/>
                    <nav className={`hidden lg:flex w-2/3 justify-around font-montserrat font-bold text-pantone-light ${!isScrolled ? "invert-color" : ""}`}>
                        <Link className='active:text-pantole-dark hover:scale-[0.9] transition duration-200' to="/alquiler">Alquiler</Link>
                        <Link className='active:text-pantole-dark hover:scale-[0.9] transition duration-200' to="/venta">Venta</Link>
                        <Link className='active:text-pantole-dark hover:scale-[0.9] transition duration-200 ' to="/compra">Compra</Link>
                        <Link className='active:text-pantole-dark hover:scale-[0.9] transition duration-200' to="/aboutUs">Sobre nosotros</Link>
                        <Link className='active:text-pantole-dark hover:scale-[0.9] transition duration-200' to="/contacto">Contacto</Link>
                    </nav>
                </div>
            </header>
    )
}