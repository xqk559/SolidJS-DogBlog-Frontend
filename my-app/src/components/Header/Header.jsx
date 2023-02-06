import { NavLink } from "@solidjs/router";
import { cutePets } from "../../pages/LikedPets/LikedPets";
import logo from '../../assets/DogBlog.jpg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <NavLink href="/">
        <img src={logo} alt="DogBlog.jpg"/>
      </NavLink>
      <div class={styles.navigationSection}>
        <small class={styles.button}><NavLink href="/likedpets">Liked Pets {cutePets().length}</NavLink></small>
        <small class={styles.button}><NavLink href="/login">Login</NavLink></small>
      </div>
    </div>
  )
}

export default Header;