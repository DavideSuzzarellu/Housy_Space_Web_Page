import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Offcanvas = ({ show, onHide }) => {
    return (
        <div className={`fixed flex flex-col top-0 right-0 w-64 min-h-screen footer text-white transform ${show ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            <div className="flex items-center justify-between p-5">
                <Link to="/">
                    <img className="text-center size-12" src="/images/isotipo_blanco.png" alt="Logo Blanco" />
                </Link>
                <button onClick={onHide} className="invert">
                    <img className="size-8" src="/images/close_button.svg" alt="Close Button" />
                </button>
            </div>
            <nav className="flex flex-col items-center justify-start gap-6 p-5 font-bold text-white font-montserrat">
                <Link to="/" className="w-full py-2 text-center text-white transition duration-200 rounded-lg shadow-md bg-pantole-dark active:text-pantone-light hover:scale-90 hover:shadow-none bg-opacity-80 hover:bg-opacity-100">Home</Link>
                <Link to="/vender" className="bg-pantole-dark bg-opacity-80 hover:bg-opacity-100 hover:shadow-none active:text-pantone-light shadow-md hover:scale-[0.9] transition duration-200 py-2 w-full text-center rounded-lg bg-button-offcanvas">Vender Casa</Link>
                <Link to="/comprar" className="shadow-md hover:shadow-none bg-pantole-dark active:text-pantone-light py-2 hover:scale-[0.9] transition duration-200 bg-opacity-80 hover:bg-opacity-100  w-full text-center rounded-lg bg-button-offcanvas">Comprar Casa</Link>
                <Link to="/alquilar" className="bg-opacity-80 hover:bg-opacity-100 shadow-md hover:shadow-none bg-pantole-dark active:text-pantone-light hover:scale-[0.9] transition duration-200 py-2 w-full text-center rounded-lg bg-button-offcanvas">Alquilar Casa</Link>
                <Link to="/servicios" className="bg-opacity-80 hover:bg-opacity-100 shadow-md hover:shadow-none bg-pantole-dark active:text-pantone-light hover:scale-[0.9] transition duration-200 py-2 w-full text-center rounded-lg bg-button-offcanvas">Servicios</Link>
                <Link onClick={onHide} to="/contacto" className="bg-opacity-80 hover:bg-opacity-100 shadow-md hover:shadow-none bg-pantole-dark active:text-pantone-light hover:scale-[0.9] transition duration-200 py-2 w-full text-center rounded-lg bg-button-offcanvas">Contacto</Link>
            </nav>
            <div className="flex flex-col items-center justify-center gap-6 my-4">
                <div className="flex items-center justify-center gap-5">
                    <img className="size-8 invert" src="/images/instagram.svg" alt="Logo Instagram" />
                    <img className="size-8 invert" src="/images/linkedin.svg" alt="Logo Linkedin" />
                </div>
            </div>
        </div>
    );
};