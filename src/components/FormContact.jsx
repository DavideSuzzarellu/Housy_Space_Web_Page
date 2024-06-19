export const FormContact = () => {
    return (
        <main className="flex flex-col items-center p-4 m-0 md:flex md:flex-row md:justify-center md:gap-5">
            <section className="flex flex-col items-center gap-6 justify-evenly md:justify-start md:max-w-md md:mx-4">
                <h2 className="text-lg font-bold text-center text-pantole-dark">CONTACTA CON HOUSYSPACE PROPERTY SOLUTIONS</h2>
                <p className="text-center">Si quieres comprar, vender, alquilar o pedir asesoramiento jurídico, no dudes en ponerte en contacto con nosotros a través del formulario y te contactaremos lo más pronto posible.</p>
                <p className="my-4">Añade el contacto a tu móvil</p>
            </section>
            <form className="flex flex-col justify-center gap-3 md:w-auto md:max-w-md md:mx-4" action="">
                <label>
                    <input 
                        type="text" 
                        placeholder="Nombre*" 
                        className="w-full p-3 m-0 text-sm bg-white border-2 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-pantone-light invalid:border-red-600"/>
                </label>
                <label>
                    <input className="w-full p-3 m-0 text-sm bg-white border-2 rounded-md shadow-sm invalid:border-red-600 placeholder-slate-400 focus:outline-none focus:border-pantone-light" type="email" placeholder="Correo electronico*" name="email"/>
                </label>
                <label>
                    <input className="w-full p-3 m-0 text-sm bg-white border-2 rounded-md shadow-sm invalid:border-red-600 placeholder-slate-400 focus:outline-none focus:border-pantone-light" type="number" placeholder="Numero de teléfono*" name="phone"/>
                </label>
                <label>
                    <input className="w-full p-3 m-0 text-sm bg-white border-2 rounded-md shadow-sm invalid:border-red-600 placeholder-slate-400 focus:outline-none focus:border-pantone-light" type="text" placeholder="Ciudad*" name="city" />
                </label>
                <label>
                    <input className="w-full p-3 m-0 text-sm bg-white border-2 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-pantone-light" type="textarea" placeholder="Mensaje" name="message"/>
                </label>
                <label className="flex gap-1">
                    <input type="checkbox" name="accept"/><p className="text-sm">He leído y acepto la Política de Privacidad. *</p>
                </label>
                <button className="px-5 py-3 mx-auto text-white bg-green-400 border-2 rounded-md" type="submit">Enviar</button>
            </form>
        </main>
    )
}