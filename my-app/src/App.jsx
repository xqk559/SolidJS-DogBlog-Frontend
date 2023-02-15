import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import {Routes, Route} from '@solidjs/router';
import Home from "./pages/Home/Home";
import LikedPets from "./pages/LikedPets/LikedPets";
import Login from "./pages/Login/Login";
import UserPage from "./pages/UserPage/UserPage";
import styles from './App.module.css'
import { QueryClientProvider, QueryClient } from '@tanstack/solid-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;