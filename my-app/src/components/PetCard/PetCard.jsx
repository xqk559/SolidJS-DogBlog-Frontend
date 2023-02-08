import { cutePets, setCutePets } from "../../pages/LikedPets/LikedPets";
import styles from './PetCard.module.css'
import { Motion } from "@motionone/solid";

const likePet = (pet) => {
  setCutePets([pet, ...cutePets()]);
}

const unLikePet = (petId) => {
  const petState = cutePets()?.filter(item => item.id !== petId)
  setCutePets(petState)
}

const petIsCute = (petId) => {
  const pet = cutePets()?.filter(item => item.id === petId)
  return pet?.length > 0
}

const PetCard = ({pet}) => {
  return (
    <Motion
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.3 }}
    >
      <div class="card mb-3">
        <div class="card-header">{pet.animal_NAME} the {pet.animal_TYPE}</div>
        <div class="card-body">
          <p class="card-text">{pet.animal_DESCRIPTION}</p>
        </div>
        <div class="card-footer">
        {petIsCute(pet.id) ? (
            <button class={styles.unlikeButton} onclick={() => unLikePet(pet.id)}>
              UnLike
            </button>
          ) : (
            <button class={styles.likeButton} onclick={() => likePet(pet)}>
              Like
            </button>
          )}
        </div>
      </div>
    </Motion>
  )
}

export default PetCard;