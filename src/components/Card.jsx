export const Card = () => {
    return (
        <article className="h-auto border-2 rounded-sm card border-pantone-light w-60">
            <header className="object-contain rounded-t-md">
                <img className="block w-full duration-300 ease-in-out hover:scale-150" src="/images/skyline-barcelona.jpg" alt="Imagen Piso" />
            </header>
            <main>
                <span className="block bg-slate-600">Piso en venta</span>
                <span>185.000£</span>

            </main>
            <footer className="border-t-2">Button</footer>
        </article>
    )
}