import { NavLink } from "@solidjs/router";
import { cutePets } from "../pages/LikedPets";
import { UserPage } from "../pages/UserPage";
import { getAllUsers } from "../services/services";

// const users = getAllUsers();

const Header = () => {
  return (
    <div>
      {/* <div>Current Users:{users}</div> */}
      <UserPage />
      <h2 class="text-decoration-none">
        <NavLink href="/">Keith's Animal Rescue!</NavLink> 
      </h2>
        <small><NavLink href="/likedpets">Liked Pets {cutePets().length}</NavLink></small>
    </div>
  )
}

export default Header;