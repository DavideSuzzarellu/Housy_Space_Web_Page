export const Offcanvas = ({ show, onHide }) => {
    return (
        <div className={`fixed flex flex-col justify-between z-40 top-0 right-0 w-64 min-h-screen footer-skyline text-white transform ${show ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
            <nav className="text-white font-montserrat font-bold flex flex-col gap-6 p-5 justify-start items-center">
                <div className="flex justify-end items-center w-full">
                    <button onClick={onHide} className="invert">
                        <img src="/images/close_button.svg" alt="Close Button" />
                    </button>
                </div>
                <a href="" className="hover:text-pantole-dark py-2 w-full text-center rounded-lg bg-button-offcanvas mt-4">Home</a>
                <a href="" className="hover:text-pantole-dark py-2 w-full text-center rounded-lg bg-button-offcanvas">Vender Casa</a>
                <a href="" className="hover:text-pantole-dark py-2 w-full text-center rounded-lg bg-button-offcanvas">Comprar Casa</a>
                <a href="" className="hover:text-pantole-dark py-2 w-full text-center rounded-lg bg-button-offcanvas">Alquilar Casa</a>
                <a href="" className="hover:text-pantole-dark py-2 w-full text-center rounded-lg bg-button-offcanvas">Servicios</a>
                <a href="" className="hover:text-pantole-dark py-2 w-full text-center rounded-lg bg-button-offcanvas">Contacto</a>
            </nav>
            <div className="flex flex-col justify-center items-center gap-6 mb-8">
                <img className="text-center size-36" src="/images/isotipo_blanco.png" alt="Logo Blanco" />
                <div className="flex justify-center items-center gap-5">
                    <img className="size-8 invert" src="/images/instagram.svg" alt="Logo Instagram" />
                    <img className="size-8 invert" src="/images/linkedin.svg" alt="Logo Linkedin" />
                </div>
            </div>
        </div>
    );
};