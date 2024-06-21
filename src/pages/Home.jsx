import { Advantages } from "../components/Advantages"
import { Properties } from "../components/Properties"
import { Reviews } from "../components/Reviews"
export const Home = () => {
    return (
        <main className="my-10">
          <Properties/>
          <Advantages/> 
          <Reviews/>
        </main>
    )
}