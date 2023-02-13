import { For } from "solid-js";
import { pets } from "../../App";
import PetCard from "../../components/PetCard/PetCard"
import { Motion } from "@motionone/solid";

const Home = () => {
  return (
    <div>
      <For each={pets()}>
          {(pet => 
            <Motion 
              animate={{ y: [0, 100, 50] }}
              transition={{ y: { offset: [0, 0.25, 1] } }}
            >
              <PetCard pet={pet} />
            </Motion>
          )}
      </For>
    </div>
  )
}
  
export default Home;