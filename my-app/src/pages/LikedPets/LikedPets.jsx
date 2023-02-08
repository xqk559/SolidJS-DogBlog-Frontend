import { createSignal, For } from "solid-js";
import PetCard from "../../components/PetCard/PetCard";
import { Motion } from "@motionone/solid";

const [cutePets, setCutePets] = createSignal([])

const LikedPets = () => {
  return (
    <div style="overflow: hidden;">
      <Motion 
        animate={{ x: [0, 100, 50] }}
        transition={{ x: { offset: [0, 0.25, 1] } }}
      >
        <For each={cutePets()}>
          {pet => <PetCard pet={pet} />}
        </For>
      </Motion>
    </div>
  )
}
export {cutePets, setCutePets}
export default LikedPets;