import { NavLink } from "@solidjs/router";
import { cutePets } from "../pages/LikedPets";

const Header = () => {
  return (
    <div>
      <h2 class="text-decoration-none">
        <NavLink href="/">Keith's Animal Rescue!</NavLink> 
      </h2>
        <small><NavLink href="/likedpets">Liked Pets {cutePets().length}</NavLink></small>
        <button type="button" onclick="location.href = 'http://127.0.0.1:3000/TestPage';">Test Page</button>
    </div>
  )
}

export default Header;