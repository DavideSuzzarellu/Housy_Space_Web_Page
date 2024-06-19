import { Card } from "./Card"
export const Properties = () => {
    return (
        <main className="container flex-grow mx-auto my-5 mb-20">
            <h1 className="my-5 text-center">Descubre las propriedades disponibles</h1>
            <section className="flex flex-row items-center justify-around">
                <Card/>
            </section>
        </main>
    )
}