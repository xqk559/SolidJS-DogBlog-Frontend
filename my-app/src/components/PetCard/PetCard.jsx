import { cutePets, setCutePets } from "../../pages/LikedPets/LikedPets";
import styles from './PetCard.module.css'
import { createSignal, Show } from "solid-js";
import { Motion, Presence } from "@motionone/solid";
import { Rerun } from "@solid-primitives/keyed";

const [unlikedPetId, setUnlikedPetId] = createSignal();

const likePet = (pet) => {
  setCutePets([pet, ...cutePets()]);
}

const unLikePet = (petId) => {
  const petState = cutePets()?.filter(item => item.id !== petId)
  const timeoutLength = (window.location.href == 'http://127.0.0.1:3000/') ? 0 : 500;

  setUnlikedPetId(petId)
  setUnlikedPetId(undefined)

  setTimeout(() => {
    setCutePets(petState)
  }, timeoutLength)
}

const petIsCute = (petId) => {
  const pet = cutePets()?.filter(item => item.id === petId)
  return pet?.length > 0
}

const PetCard = ({pet}) => {
  return (
    <Presence exitBeforeEnter>
      {/* <Rerun on={unlikedPetId()}> */}
        <Show when={unlikedPetId() !== pet.id || window.location.href == 'http://127.0.0.1:3000/'} >
          <Motion
            initial={{ opacity: 0 }}
            animate={{ transition: { delay: 0.05, duration: 2 }, opacity: 1 }}
            exit={{ opacity: 0, y: [0, -100] }}
            transition={{ duration: .5 }}
          >
            <div class="card mb-3">
              <div class="card-header">{pet.animal_NAME} the {pet.animal_TYPE}</div>
              <div class="card-body">
                <p class="card-text">{pet.animal_DESCRIPTION}</p>
              </div>
              <div class="card-footer">
              {petIsCute(pet.id) ? (
                <div>
                  <div class="container">
                    <Presence exitBeforeEnter>
                      <Motion
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <button class={styles.unlikeButton} onclick={() => unLikePet(pet.id)}>
                          UnLike
                        </button>
                      </Motion> 
                    </Presence>
                  </div>
                </div>            
                ) : (
                  <div>
                    <div class="container">
                      <Presence exitBeforeEnter>
                        <Motion
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <button class={styles.likeButton} onclick={() => likePet(pet)}>
                            Like
                          </button>
                        </Motion> 
                      </Presence>
                    </div>
                  </div>            
                )}
              </div>
            </div>
          </Motion>
        </Show>
      {/* </Rerun> */}
    </Presence>
  )
}

export {unlikedPetId}
export default PetCard;