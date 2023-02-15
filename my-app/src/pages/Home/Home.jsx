import { For } from "solid-js";
import PetCard from "../../components/PetCard/PetCard"
import { Motion } from "@motionone/solid";
import { createQuery } from '@tanstack/solid-query'

const Home = () => {
  const query = createQuery(
    () => ['repoData'],
    () =>
      fetch('http://localhost:8080/api/pets').then(
        (res) => res.json(),
      ),
  )

  return (
    <div>
      <Switch>
        <Match when={query.isLoading}>Loading...</Match>
        <Match when={query.isError}>Error: {query.error.message}</Match>
        <Match when={query.isSuccess}>
          <div>
            <For each={query.data}>
              {(pet => 
                // <Motion animate={{ y: [0, 100] }}>
                  <PetCard pet={pet} />
                // </Motion>
              )}
            </For>
          </div>
        </Match>
      </Switch>
    </div>
  )
}
  
export default Home;