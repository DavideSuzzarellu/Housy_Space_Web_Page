import { SlideReviewPc } from "./SlideReviewPc"
import { SlideReviewMobile } from "./SlideReviweMobile"

export const Reviews = () => {
    
    return (
        <main>
            <section className="block h-full px-5 mx-auto md:hidden">
                <h1 className="font-bold text-center mb-7 text-pantole-dark">Las opiniones de nuestros clientes</h1>
                <swiper-container pagination-dynamic-bullets="true" space-between="20" pagination="true" slides-per-view="1" speed="400" Autoplay="true">
                    <SlideReviewMobile  
                        avatar={"https://lh3.googleusercontent.com/a/ACg8ocLWb0mMLKOcVRbQquhkiE41Vv78p0LXuS6mBbBBQoYOLyuUGA=w45-h45-p-rp-mo-br100"} 
                        name={"Carla Martín"} 
                        review={"Profesionales de 10. Después de mucho tiempo buscando piso y estando en contacto con diferentes inmobiliarias, tanto Davide como Manel, me devolvieron la confianza para que el piso que me he comprado fuese mi piso. Cercanos, agradables, siempre atentos y ayudándote en todo lo que necesites, eficaces y profesionales. Me ayudaron durante todo el proceso en todo momento, me sentí muy segura, asesorada y apoyada. Estoy muy contenta. Recomiendo 100% a esta inmobiliaria. Son estupendos!"} />
                    <SlideReviewMobile 
                        avatar={"https://lh3.googleusercontent.com/a/ACg8ocIlVSFWygEtfwo_jSC-VkwJym_fM8Mo3ZEVkyILzYHO98dLug=w45-h45-p-rp-mo-br100"} 
                        name={"GLORIA MAYLIN"} 
                        review={"Hemos vendido el piso familiar a través de HousySpace. Todo ha ido genial. En un mes y medio ha estado todo solucionado. Son unos grandes profesionales que se ocupan de todo y que han sabido adaptarse a nuestras circunstancias con paciencia y amabilidad. Además trabajan coordinadamente con una gestoría muy competente, lo cual da mucha tranquilidad. Un 10!!.  Muchas gracias, Davide!!"}/>
                    <SlideReviewMobile 
                        avatar={"https://lh3.googleusercontent.com/a/ACg8ocKmy0fsAF78btBw3flw5wYB5nL_OrgIoVXEX7hp7Dz9FpOVhQ=w45-h45-p-rp-mo-br100"} 
                        name={"Caridad Maylin"} 
                        review={"Davide y su equipo nos han ayudado en la venta de la casa de mis padres. Más allá de hacerlo en tiempo y en las condiciones previstas, quiero destacar el acompañamiento y dedicación que nos han dado. Es para mí muy importante confiar la venta de una casa que te importa, en personas que te hacen sentir que, para ellos, también importa. Ah, y por supuesto, depositar en ellos trámites y burocracia. Gracias Housyspace!"} />
                    <SlideReviewMobile 
                        avatar={"https://lh3.googleusercontent.com/a-/ALV-UjUCesxb3RaR28aH-j5uYSmF8dl99cF7zn8h5pjZrPfpem3pd_fyyg=w45-h45-p-rp-mo-br100"} 
                        name={"Monica Torlino"} 
                        review={"Despues de mucho tiempo buscando y tras varios intentos fallidos con otras inmobilarias cuya profesionalidad deja mucho que desear.. hemos encontrado casa a traves de HousySpace! Todo un acierto! La verdad que nos ha encantado el trato recibido. Davide nos ha ayudado mucho durante todo el proceso, facilitandonos toda la documentacion necesaria, contestando a todas las preguntas a cualquier hora del dia y siempre disponible para abrirnos la puerta para ver el piso cuando lo necesitabamos. Un trato excelente, profesional y al mismo tiempo cercano muy dificil de encontrar en el mundo inmobiliario de Barcelona. 100% recomendado!"} />
                    <SlideReviewMobile 
                        avatar={"https://lh3.googleusercontent.com/a/ACg8ocKxPss8Ns-7ajyGYRdimYk1DRQVvlRcinDCYLCeXwWl0xGWKQ=w45-h45-p-rp-mo-br100"} 
                        name={"marcela ottonello"} 
                        review={"HousySpace ha sido una de las mejores experiencias que hemos tenido en Barcelona para la compra de nuestro piso. Han sido muy amables y considerados durante todo el proceso. Siempre a nuestra disposicion para aclarar cualquier duda y resolver todo de manera rapido y eficiente con una atencion personalizada y amable en todo momento. Estamos muy agradecidas a Davide Oggiano por esta experiencia y desde ya se lo recomiendo a todos vosotros pensando en la compra de un piso."} />
                    <SlideReviewMobile 
                        avatar={"https://lh3.googleusercontent.com/a-/ALV-UjW6CuuOXDH0q1q1K_nDbzxNNduEndQm9e-K7EE4nWS7G-Am5R8itw=w45-h45-p-rp-mo-ba2-br100"} 
                        name={"Valerie Kalusinski"} 
                        review={"Agentes muy profesionales, he tenido muy buena experiencia con ellos, están pendientes en todo momento, dan toda la información en el momento adecuado e intentan que todo el mundo quede satisfecho. Hasta me consiguieron hipoteca. Muchisimas Gracias !"} />
                    <SlideReviewMobile 
                         avatar={"https://lh3.googleusercontent.com/a/ACg8ocJTeau4LOrbbgVWGZGRYMnv0beDUVVMA-D2JzduDnvWWaOzzA=w45-h45-p-rp-mo-br100"} 
                         name={"Javi Zaldivar"} 
                         review={"Con Housyspace he acabado comprando mi futura casa! La relación con Davide, mi gestor inmobiliario, ha sido fantástica desde el primer momento: visitamos la vivienda todas las veces que necesité, me facilitó toda la información necesaria de la vivienda, de los compradores y del administrador de fincas, siempre con rapidez y profesionalidad, pero además su carácter cercano y amable te hace sentirlo muy cercano y accesible. Y no solo eso: con su gran experiencia te aconseja también con temas que exceden sus competencias y que son super-importantes a la hora de invertir tanto dinero en la compra de una vivienda! Me he sentido muy acompañado y bien asesorado en todo momento. 100% recomendable."} />
                    <SlideReviewMobile  
                        avatar={"https://lh3.googleusercontent.com/a/ACg8ocIcGIUEy_2FwXYY0yFD_h117XNU94dqyxLNzqQbAdOhwxK1ZA=w45-h45-p-rp-mo-br100"} 
                        name={"Chari Muñoz"} 
                        review={"Si queréis vender un piso rápido, con buenos profesionales que si os surge algun problema son capaces de solucionarlo intentando causarte a ti las menos molestias posibles, esta es tu empresa. Hemos quedado encantados con Davide y su equipo. Un gran profesional y un encanto de persona. Ya es el segundo piso que vendemos con ellos y aunque tuvimos contratiempos lo han sabido solucionar de 10."} />
                </swiper-container>
            </section>
            <section className="hidden h-full gap-5 px-10 mx-auto md:block">
                <h1 className="font-bold text-center mb-7 text-pantole-dark">Las opiniones de nuestros clientes</h1>
                <swiper-container pagination-dynamic-bullets="true" space-between="50" pagination="true" loop="true" slides-per-view="3" speed="400" Autoplay="true"  effect="coverflow" grab-cursor="true" centered-slides="true" coverflow-effect-rotate="2" navigation="true" coverflow-effect-stretch="-10" coverflow-effect-depth="50" coverflow-effect-modifier="0.3">
                    <SlideReviewPc 
                        avatar={"https://lh3.googleusercontent.com/a/ACg8ocLWb0mMLKOcVRbQquhkiE41Vv78p0LXuS6mBbBBQoYOLyuUGA=w45-h45-p-rp-mo-br100"} 
                        name={"Carla Martín"} 
                        review={"Profesionales de 10. Después de mucho tiempo buscando piso y estando en contacto con diferentes inmobiliarias, tanto Davide como Manel, me devolvieron la confianza para que el piso que me he comprado fuese mi piso. Cercanos, agradables, siempre atentos y ayudándote en todo lo que necesites, eficaces y profesionales. Me ayudaron durante todo el proceso en todo momento, me sentí muy segura, asesorada y apoyada. Estoy muy contenta. Recomiendo 100% a esta inmobiliaria. Son estupendos!"} />
                    <SlideReviewPc 
                        avatar={"https://lh3.googleusercontent.com/a/ACg8ocIlVSFWygEtfwo_jSC-VkwJym_fM8Mo3ZEVkyILzYHO98dLug=w45-h45-p-rp-mo-br100"} 
                        name={"GLORIA MAYLIN"} 
                        review={"Hemos vendido el piso familiar a través de HousySpace. Todo ha ido genial. En un mes y medio ha estado todo solucionado. Son unos grandes profesionales que se ocupan de todo y que han sabido adaptarse a nuestras circunstancias con paciencia y amabilidad. Además trabajan coordinadamente con una gestoría muy competente, lo cual da mucha tranquilidad. Un 10!!.  Muchas gracias, Davide!!"} />
                    <SlideReviewPc 
                        avatar={"https://lh3.googleusercontent.com/a/ACg8ocKmy0fsAF78btBw3flw5wYB5nL_OrgIoVXEX7hp7Dz9FpOVhQ=w45-h45-p-rp-mo-br100"} 
                        name={"Caridad Maylin"} 
                        review={"Davide y su equipo nos han ayudado en la venta de la casa de mis padres. Más allá de hacerlo en tiempo y en las condiciones previstas, quiero destacar el acompañamiento y dedicación que nos han dado. Es para mí muy importante confiar la venta de una casa que te importa, en personas que te hacen sentir que, para ellos, también importa. Ah, y por supuesto, depositar en ellos trámites y burocracia. Gracias Housyspace!"} />
                    <SlideReviewPc 
                        avatar={"https://lh3.googleusercontent.com/a-/ALV-UjUCesxb3RaR28aH-j5uYSmF8dl99cF7zn8h5pjZrPfpem3pd_fyyg=w45-h45-p-rp-mo-br100"} 
                        name={"Monica Torlino"} 
                        review={"Despues de mucho tiempo buscando y tras varios intentos fallidos con otras inmobilarias cuya profesionalidad deja mucho que desear.. hemos encontrado casa a traves de HousySpace! Todo un acierto! La verdad que nos ha encantado el trato recibido. Davide nos ha ayudado mucho durante todo el proceso, facilitandonos toda la documentacion necesaria, contestando a todas las preguntas a cualquier hora del dia y siempre disponible para abrirnos la puerta para ver el piso cuando lo necesitabamos. Un trato excelente, profesional y al mismo tiempo cercano muy dificil de encontrar en el mundo inmobiliario de Barcelona. 100% recomendado!"} />
                    <SlideReviewPc 
                        avatar={"https://lh3.googleusercontent.com/a/ACg8ocKxPss8Ns-7ajyGYRdimYk1DRQVvlRcinDCYLCeXwWl0xGWKQ=w45-h45-p-rp-mo-br100"} 
                        name={"marcela ottonello"} 
                        review={"HousySpace ha sido una de las mejores experiencias que hemos tenido en Barcelona para la compra de nuestro piso. Han sido muy amables y considerados durante todo el proceso. Siempre a nuestra disposicion para aclarar cualquier duda y resolver todo de manera rapido y eficiente con una atencion personalizada y amable en todo momento. Estamos muy agradecidas a Davide Oggiano por esta experiencia y desde ya se lo recomiendo a todos vosotros pensando en la compra de un piso."} />
                    <SlideReviewPc 
                        avatar={"https://lh3.googleusercontent.com/a-/ALV-UjW6CuuOXDH0q1q1K_nDbzxNNduEndQm9e-K7EE4nWS7G-Am5R8itw=w45-h45-p-rp-mo-ba2-br100"} 
                        name={"Valerie Kalusinski"} 
                        review={"Agentes muy profesionales, he tenido muy buena experiencia con ellos, están pendientes en todo momento, dan toda la información en el momento adecuado e intentan que todo el mundo quede satisfecho. Hasta me consiguieron hipoteca. Muchisimas Gracias !"} />
                    <SlideReviewPc 
                        avatar={"https://lh3.googleusercontent.com/a/ACg8ocJTeau4LOrbbgVWGZGRYMnv0beDUVVMA-D2JzduDnvWWaOzzA=w45-h45-p-rp-mo-br100"} 
                        name={"Javi Zaldivar"} 
                        review={"Con Housyspace he acabado comprando mi futura casa! La relación con Davide, mi gestor inmobiliario, ha sido fantástica desde el primer momento: visitamos la vivienda todas las veces que necesité, me facilitó toda la información necesaria de la vivienda, de los compradores y del administrador de fincas, siempre con rapidez y profesionalidad, pero además su carácter cercano y amable te hace sentirlo muy cercano y accesible. Y no solo eso: con su gran experiencia te aconseja también con temas que exceden sus competencias y que son super-importantes a la hora de invertir tanto dinero en la compra de una vivienda! Me he sentido muy acompañado y bien asesorado en todo momento. 100% recomendable."} />
                    <SlideReviewPc 
                        avatar={"https://lh3.googleusercontent.com/a/ACg8ocIcGIUEy_2FwXYY0yFD_h117XNU94dqyxLNzqQbAdOhwxK1ZA=w45-h45-p-rp-mo-br100"} 
                        name={"Chari Muñoz"} 
                        review={"Si queréis vender un piso rápido, con buenos profesionales que si os surge algun problema son capaces de solucionarlo intentando causarte a ti las menos molestias posibles, esta es tu empresa. Hemos quedado encantados con Davide y su equipo. Un gran profesional y un encanto de persona. Ya es el segundo piso que vendemos con ellos y aunque tuvimos contratiempos lo han sabido solucionar de 10."} />
                </swiper-container>
            </section>
        </main>
    )
}