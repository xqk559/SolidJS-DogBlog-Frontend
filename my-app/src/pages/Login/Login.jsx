import { UserPage } from "./../UserPage/UserPage";
import styles from './Login.module.css'
import { Motion } from "@motionone/solid";

async function SubForm() {
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
		</div>
	)
}
  
export default Login;