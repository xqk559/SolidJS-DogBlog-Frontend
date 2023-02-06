import Header from "./components/Header/Header";
import {Routes, Route} from '@solidjs/router';
import Home from "./pages/Home/Home";
import LikedPets from "./pages/LikedPets/LikedPets";
import Login from "./pages/Login/Login";
import UserPage from "./pages/UserPage/UserPage";
import { createEffect, createSignal } from "solid-js";

const [pets, setPets] = createSignal([])

createEffect(async () => {
  const res = await fetch(`http://pets-v2.dev-apis.com/pets`)
  const json = await res.json()
  setPets(json.pets.reverse())
  console.log(json.pets)
})

function App() {
  return (
    <div class="container">
      <Header />
      <Routes>
        <Route element={<Home />} end path='/' />
        <Route element={<LikedPets />} path='/Likedpets' />
        <Route element={<Login />} path='/Login' />
        <Route element={<UserPage />} path='/UserPage' />
      </Routes>
    </div>
  );
}

export {pets}

export default App;