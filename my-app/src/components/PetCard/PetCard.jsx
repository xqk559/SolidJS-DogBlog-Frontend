import { cutePets, setCutePets } from "../../pages/LikedPets/LikedPets";
import styles from './PetCard.module.css'

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
    <div class="card mb-3">
      <div class="card-header">Pet Name is {pet.name} a {pet.animal}</div>
      <div class="card-body">
        <p>{pet.city}, {pet.state}</p>
        <p class="card-text">{pet.description}</p>
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
  )
}

export default PetCard;