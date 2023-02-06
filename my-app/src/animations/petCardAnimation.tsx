import { Component, createSignal, Show } from "solid-js";
import { Motion, Presence } from "@motionone/solid";

export const PetCardAnimation: Component = () => {
  const [toggle, setToggle] = createSignal(true);
  return (
    <div class="container">
      <Presence exitBeforeEnter>
        <Show when={toggle()}>
          <Motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.3 }}
          />
        </Show>
      </Presence>
      <button onClick={() => setToggle(!toggle())}>
        Toggle
      </button>
    </div>
  );
};
