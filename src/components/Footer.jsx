export const Footer = () => {
    return (
        <footer className="flex flex-col">
            <div className="footer-skyline p-4 w-full flex flex-col gap-5 md:flex-row items-center justify-around">
                <section className="flex font-montserrat pb-4 border-b-2 flex-col gap-2 md:border-b-0 md:w-1/3 w-full justify-between items-center">
                    <img src="/images/logo.svg" alt="Logo Housy Space" className="h-14 ms-10]" loading="lazy"/>
                    <div className="flex items-center justify-between gap-2 text-white">
                        <a href="https://www.google.com/maps/place/HousySpace+Property+Solution/@41.3971625,2.1459674,17z/data=!3m2!4b1!5s0x12a4a29968265bef:0x6f2bcd5750d4a4ab!4m6!3m5!1s0x12a4a3bad8ba23d1:0x2ebc249abb0f939c!8m2!3d41.3971626!4d2.1508383!16s%2Fg%2F11sjcghb4k?entry=ttu" target="_blank">
                            <img className="invert hover:scale-125 transition duration-300 size-8" src="/images/map-pin.svg" alt="Logo Map-pin" loading="lazy"/>
                        </a>
                        <div className="flex flex-col items-center text-white">
                            <p>Travessera de Gràcia 73, 2º 3ª</p>
                            <p>BARCELONA, 08006</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-white">
                        <a href="">
                            <img className="invert hover:scale-125 transition duration-300 size-8" src="/images/phone.svg" alt="Logo Phone" />
                        </a>
                        <p>+34 613 08 48 04</p>
                    </div>
                    <div className="flex w-100 items-center justify-between gap-2 text-white">
                        <a href="">
                            <img className="invert size-8 hover:scale-125 transition duration-300" src="/images/whatsapp.svg" alt="Logo Whats'App" />
                        </a>
                        <p>+34 613 08 48 04</p>
                    </div>
                </section>
                <section className="md:w-1/3 md:border-b-0 border-b-2 pb-4 w-full flex flex-col align-center justify-center gap-5">
                        <span className="w-full font-montserrat font-semibold text-white text-center text-xl">Siguenos en:</span>
                        <div className="flex align-center justify-center gap-10">
                            <a href="https://www.instagram.com/housyspace/" target="_blank" className="flex flex-col items-center justify-center invert hover:scale-125 transition duration-300">
                                <img className="size-8" src="/images/instagram.svg" alt="Logo Instagram" loading="lazy"/>
                                <span className="font-montserrat font-semibold">Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/in/housyspace-property-solution-51b53226a/" target="_blank" className="flex flex-col items-center justify-center invert hover:scale-125 transition duration-300">
                                <img className="size-8" src="/images/linkedin.svg" alt="Logo Linkedin" loading="lazy"/>
                                <span className="font-montserrat font-semibold">LinkedIn</span>
                            </a>
                        </div>
                </section>
                <section className="md:w-1/3 w-full h-auto flex items-center justify-center">
                    <div className="w-auto flex flex-col justify-center items-center gap-2">
                        <img className="h-1/3 w-full size-52 pb-3 border-b-2 inline-block" src="/images/logo-registro-inmboliarios.svg" alt="Logo Registro Inmobiliario" loading="lazy"/>
                        <img className="h-2/3 size-64" src="\images\expertos-inmobiliarios-housyspace.png" alt="Logo Expertos inmobilirios" loading="lazy" ></img>
                        <span className="bg-white font-montserrat font-bold text-pantole-dark px-1 w-full text-center">Experto Nº 3261</span>
                    </div>
                </section>
            </div>
            <div className="bg-slate-400 flex items-center justify-center gap-3 p-1">
                <a className="font-montserrat hover:text-pantole-dark text-xs underline" href="">Aviso legal</a>
                <a className="font-montserrat hover:text-pantole-dark text-xs underline" href="">Política de privacidad</a>
                <a className="font-montserrat hover:text-pantole-dark text-xs underline" href="">Política de Cookies</a>
            </div> 
        </footer>
    )
}