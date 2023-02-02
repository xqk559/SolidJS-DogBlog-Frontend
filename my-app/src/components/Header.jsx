import { NavLink } from "@solidjs/router";
import { cutePets } from "../pages/LikedPets";
import { UserPage } from "../pages/UserPage";
import { getAllUsers } from "../services/services";

// const users = getAllUsers();

const SubForm = () => {
  const formData = $('#myForm').serialize()
  console.log("SUBFORM");
  console.log(formData);
  $.ajax({
    url: 'http://localhost:8080/api/login',
    type: 'post',
    body: $('#myForm').serialize(),
    success: function(){
        alert("worked");
    }
  });
}

const Header = () => {
  return (
    <div>
      <div style="text-align: center">
        <h1>Admin Login</h1>
        <form name="myForm" id="myForm">
            <label for="email">Email:</label>
            <input name="email" size="30" />
            <br></br>
            <label for="password">Password:</label>
            <input type="password" name="password" size="30" />
            <label for="FirstName">First Name:</label>
            <input name="FirstName" size="30" />
            <br></br>
            <label for="LastName">Last Name:</label>
            <input type="LastName" name="LastName" size="30" />
            <br>${message}</br>           
            <button type="button" value="submit" onclick={SubForm}>Login</button>
        </form>
      </div>

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