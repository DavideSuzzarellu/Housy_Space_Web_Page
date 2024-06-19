import { Link } from "react-router-dom";

export const Offcanvas = ({ show, onHide }) => {
    return (
        <div className={`fixed flex flex-col justify-between z-40 top-0 right-0 w-64 min-h-screen footer text-white transform ${show ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            <button onClick={onHide} className="p-5 ml-auto invert">
                <img src="/images/close_button.svg" alt="Close Button" />
            </button>
            <nav className="flex flex-col items-center justify-start gap-6 p-5 font-bold text-white font-montserrat">
                <Link to="" className="active:text-pantole-dark hover:scale-[0.9] transition duration-200 py-2 w-full text-center rounded-lg bg-button-offcanvas mt-4">Home</Link>
                <Link to="" className="active:text-pantole-dark hover:scale-[0.9] transition duration-200 py-2 w-full text-center rounded-lg bg-button-offcanvas">Vender Casa</Link>
                <Link to="" className="active:text-pantole-dark py-2 hover:scale-[0.9] transition duration-200 w-full text-center rounded-lg bg-button-offcanvas">Comprar Casa</Link>
                <Link to="" className="active:text-pantole-dark hover:scale-[0.9] transition duration-200 py-2 w-full text-center rounded-lg bg-button-offcanvas">Alquilar Casa</Link>
                <Link to="" className="active:text-pantole-dark hover:scale-[0.9] transition duration-200 py-2 w-full text-center rounded-lg bg-button-offcanvas">Servicios</Link>
                <Link to="" className="active:text-pantole-dark hover:scale-[0.9] transition duration-200 py-2 w-full text-center rounded-lg bg-button-offcanvas">Contacto</Link>
            </nav>
            <div className="flex flex-col items-center justify-center gap-6 mb-8">
                <img className="text-center size-36" src="/images/isotipo_blanco.png" alt="Logo Blanco" />
                <div className="flex items-center justify-center gap-5">
                    <img className="size-8 invert" src="/images/instagram.svg" alt="Logo Instagram" />
                    <img className="size-8 invert" src="/images/linkedin.svg" alt="Logo Linkedin" />
                </div>
            </div>
        </div>
    );
};