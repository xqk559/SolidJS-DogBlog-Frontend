import { createSignal, For, createEffect } from "solid-js";
import PetCard, { unlikedPetId } from "../../components/PetCard/PetCard";
import { Motion } from "@motionone/solid";

const [cutePets, setCutePets] = createSignal([])

const LikedPets = () => {
  return (
    <div>
      <Motion animate={{ y: [0, 100] }} >
        <For each={cutePets()}>
          {pet => <PetCard pet={pet} />}
        </For>
      </Motion>
    </div>
  )  
}
export {cutePets, setCutePets}
export default LikedPets;