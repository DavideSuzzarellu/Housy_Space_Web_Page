import { FormContact } from "../components/FormContact"
export const Contact = () => {
    return (
        <div className="px-6 mx-auto my-5">
            <div>
                <h1 className="mb-2 font-bold text-center text-pantole-dark">¿En qué podemos ayudarte?</h1>
                <p className="text-center text-slate-400">Coméntanos cualquier duda y contactaremos contigo lo más pronto posible.</p>
            </div>
            <div className="md:flex md:justify-evenly md:mt-10">
                <section>
                    <h2 className="mt-8 font-extrabold text-pantole-dark">Oficina</h2>
                    <h3 className="inline-block font-medium text-pantole-dark">Direccion:</h3> <p>Travessera de Gràcia 73, 2º 3ª, BARCELONA</p>
                    <h3 className="inline-block font-medium text-pantole-dark">Codigo Postal:</h3> <p>08006</p>
                    <h3 className="font-medium text-pantole-dark">Horario:</h3>
                    <p>De Lunes a Viernes: 10:00 a 19:00</p>
                    <p>Sabado: 10:00 a 14:00</p>
                    <p>Domigno cerrado</p>
                    <h3 className="inline-block mt-6 font-extrabold text-pantole-dark">Telefono:</h3> <p className="inline-block"> +34 613 08 48 04</p>
                    <h3 className="mt-6 font-extrabold text-pantole-dark">Whatsapp:</h3> <p className="inline-block"> +34 613 08 48 04</p>
                </section>
                <section className="md:flex md:flex-col md:justify-start">
                    <h3 className="mt-6 mb-4 font-extrabold text-pantole-dark">Contactanos por correo:</h3>
                    <FormContact/>
                </section>
            </div>
        </div>
    )
}