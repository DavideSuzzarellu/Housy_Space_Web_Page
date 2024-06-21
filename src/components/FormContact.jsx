import { Link } from "react-router-dom"

export const FormContact = () => {
    return (
            <form className="flex flex-col justify-center gap-3 md:w-auto md:max-w-md" action="">
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
                    <textarea className="w-full p-3 m-0 text-sm bg-white border-2 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-pantone-light" rows="3"  placeholder="Mensaje" name="message"/>
                </label>
                <label className="flex gap-1">
                    <input type="checkbox" name="accept"/><p className="text-sm">* He leído y acepto la <Link className="underline hover:text-pantone-light text-pantole-dark" to={"/politica-privacidad"}>Política de Privacidad</Link></p>
                </label>
                <button className="px-5 py-3 mx-auto text-white bg-green-400 border-2 rounded-md" type="submit">Enviar</button>
            </form>
    )
}