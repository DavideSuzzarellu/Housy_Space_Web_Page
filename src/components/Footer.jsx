import { Link } from "react-router-dom"
export const Footer = () => {
    return (
        <footer className="flex flex-col">
            <div className="flex flex-col items-center justify-around w-full gap-5 p-4 footer md:flex-row">
                <section className="flex flex-col items-center justify-between w-full gap-2 pb-4 border-b-2 font-montserrat md:border-b-0 md:w-1/3">
                    <img src="/images/logo.svg" alt="Logo Housy Space" className="h-14 ms-10]" loading="lazy"/>
                    <div className="flex items-center justify-between gap-2 text-white">
                        <a href="https://www.google.com/maps/place/HousySpace+Property+Solution/@41.3971625,2.1459674,17z/data=!3m2!4b1!5s0x12a4a29968265bef:0x6f2bcd5750d4a4ab!4m6!3m5!1s0x12a4a3bad8ba23d1:0x2ebc249abb0f939c!8m2!3d41.3971626!4d2.1508383!16s%2Fg%2F11sjcghb4k?entry=ttu" target="_blank">
                            <img className="transition duration-300 invert hover:scale-125 size-8" src="/images/map-pin.svg" alt="Logo Map-pin" loading="lazy"/>
                        </a>
                        <div className="flex flex-col items-center text-white">
                            <p>Travessera de Gràcia 73, 2º 3ª</p>
                            <p>BARCELONA, 08006</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-white">
                        <a href="tel:+34613084804" target="_blank">
                            <img className="transition duration-300 invert hover:scale-125 size-8" src="/images/phone.svg" alt="Logo Phone" />
                        </a>
                        <p>+34 613 08 48 04</p>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-white w-100">
                        <a href="https://wa.me/34613084804" target="_blank">
                            <img className="transition duration-300 invert size-8 hover:scale-125" src="/images/whatsapp.svg" alt="Logo Whats'App" />
                        </a>
                        <p>+34 613 08 48 04</p>
                    </div>
                </section>
                <section className="flex flex-col justify-center w-full gap-5 pb-4 border-b-2 md:w-1/3 md:border-b-0 align-center">
                        <span className="w-full text-xl font-semibold text-center text-white font-montserrat">Siguenos en:</span>
                        <div className="flex justify-center gap-10 align-center">
                            <a href="https://www.instagram.com/housyspace/" target="_blank" className="flex flex-col items-center justify-center transition duration-300 invert hover:scale-125">
                                <img className="size-8" src="/images/instagram.svg" alt="Logo Instagram" loading="lazy"/>
                                <span className="font-semibold font-montserrat">Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/in/housyspace-property-solution-51b53226a/" target="_blank" className="flex flex-col items-center justify-center transition duration-300 invert hover:scale-125">
                                <img className="size-8" src="/images/linkedin.svg" alt="Logo Linkedin" loading="lazy"/>
                                <span className="font-semibold font-montserrat">LinkedIn</span>
                            </a>
                        </div>
                </section>
                <section className="flex items-center justify-center w-full h-auto md:w-1/3">
                    <div className="flex flex-col items-center justify-center w-auto gap-2">
                        <img className="inline-block w-full pb-3 border-b-2 h-1/3 size-52" src="/images/logo-registro-inmboliarios.svg" alt="Logo Registro Inmobiliario" loading="lazy"/>
                        <img className="h-2/3 size-64" src="\images\expertos-inmobiliarios-housyspace.png" alt="Logo Expertos inmobilirios" loading="lazy" ></img>
                        <span className="w-full px-1 font-bold text-center bg-white font-montserrat text-pantole-dark">Experto Nº 3261</span>
                    </div>
                </section>
            </div>
            <div className="flex items-center justify-center gap-3 p-1 bg-slate-400">
                <Link className="text-xs underline font-montserrat hover:text-pantole-dark" to="/aviso-legal">Aviso legal</Link>
                <Link className="text-xs underline font-montserrat hover:text-pantole-dark" to="/politica-privacidad">Política de privacidad</Link>
                <Link className="text-xs underline font-montserrat hover:text-pantole-dark" to="/politica-cookies">Política de Cookies</Link>
            </div> 
        </footer>
    )
}