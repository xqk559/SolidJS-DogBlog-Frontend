import { NavLink } from "@solidjs/router";
import { cutePets } from "../pages/LikedPets";
import logo from '../assets/DogBlog.jpg'
import styles from '../Header.module.css'

const Header = () => {
  return (
    <div>
      <a href="http://127.0.0.1:3000/">
        <img src={logo} alt="DogBlog.jpg"/>
      </a>
      <div class={styles.navigationSection}>
        <small class={styles.button}><NavLink href="/likedpets">Liked Pets {cutePets().length}</NavLink></small>
        <button class={styles.button} type="button" onclick="location.href = 'http://127.0.0.1:3000/TestPage';">Login</button>
      </div>
    </div>
  )
}

export default Header;