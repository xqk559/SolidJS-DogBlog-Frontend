import { UserPage } from "./../UserPage/UserPage";
import styles from './Login.module.css'
import { Motion } from "@motionone/solid";
import { Transition } from "solid-transition-group";
import { createSignal, Show } from "solid-js";

const [show, setShow] = createSignal(true);

async function SubForm() {
  setShow(!show);
  const formDataArray = ($('#loginForm').serializeArray());
  let formDataObject = {};
  const data = formDataArray.forEach(element => {
    console.log(element.value);
    element.value
  });
  // data.push();

  console.log(formDataArray);
  console.log(data);
  const testUser = {
    'id':1, 
    'firstName':'', 
    'lastName':'', 
    'email':'', 
    'password':''
  }
  const response = await fetch('http://localhost:8080/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(testUser)
    })
  return await response.json();
}

const Login = () => {
	return (
		<div>
      <Motion
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.3 }}
      >
        <div class={styles.loginPage}>
            <h1 class={styles.purple}>Login</h1>
          <form name="loginForm" id="loginForm" class={styles.loginForm}>
            <div class={styles.formElement}>
              <label for="email" class={styles.formElement}>Email:</label>
              <input name="email" size="30"/>
            </div>
            <div class={styles.formElement}>
              <label for="password" class={styles.formElement}>Password:</label>
              <input type="password" name="password" size="30"/>
            </div>    
            <button class={styles.formButton} type="button" onclick={SubForm}>Login</button>
          </form>
        </div>
      </Motion>
			<UserPage />
      <Transition name="slide-fade">{show() && <div>First</div>}</Transition>
      <Transition
        onEnter={(el, done) => {
          const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 600
          });
          a.finished.then(done);
        }}
        onExit={(el, done) => {
          const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 600
          });
          a.finished.then(done);
        }}
      >
        {show() && <div>Second</div>}
      </Transition>
		</div>
	)
}
  
export default Login;