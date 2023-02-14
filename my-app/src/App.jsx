import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import {Routes, Route} from '@solidjs/router';
import Home from "./pages/Home/Home";
import LikedPets from "./pages/LikedPets/LikedPets";
import Login from "./pages/Login/Login";
import UserPage from "./pages/UserPage/UserPage";
import { createEffect, createSignal } from "solid-js";
import styles from './App.module.css'

const [pets, setPets] = createSignal([])

createEffect(async () => {
  const response = await fetch(`http://localhost:8080/api/pets`)
  const responseJson = await response.json() 
  setPets(responseJson)
})

function App() {
  return (
    <div class="container">
      <div class={styles.Page}>
        <Header />
        <Routes>
          <Route element={<Home />} end path='/' />
          <Route element={<LikedPets />} path='/Likedpets' />
          <Route element={<Login />} path='/Login' />
          <Route element={<UserPage />} path='/UserPage' />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export {pets}

export default App;