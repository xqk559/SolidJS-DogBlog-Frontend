import { UserPage } from "./UserPage";
import styles from '../TestPage.module.css'

const SubForm = () => {
	const formDataArray = ($('#loginForm').serializeArray());
	let formDataObject = {};
	const data = formDataArray.forEach(element => {
		console.log(element.value);
		element.value
	});
	console.log(data);

  const testUser = {
    'id':1, 
    'firstName':'', 
    'lastName':'', 
    'email':'', 
    'password':''
  }

  $.ajax({
    url: 'http://localhost:8080/api/login',
    type: 'post',
	  contentType: "application/json",
    body: testUser,
    success: function(){
        alert("worked");
    }
  });
}

const TestPage = () => {
	return (
		<div>
			<div style="text-align: center">
				<h1>Admin Login</h1>
				<form name="loginForm" id="loginForm" class={styles.loginForm}>
					<div class={styles.formElement}>
						<label for="email" class={styles.formElement}>Email:</label>
						<input name="email" size="30"/>
					</div>
					<div class={styles.formElement}>
						<label for="password" class={styles.formElement}>Password:</label>
						<input type="password" name="password" size="30"/>
					</div>
					<div class={styles.formElement}>
						<label for="FirstName" class={styles.formElement}>First Name:</label>
						<input name="FirstName" size="30"/>
					</div>
					<div class={styles.formElement}>
						<label for="LastName" class={styles.formElement}>Last Name:</label>
						<input type="LastName" name="LastName" size="30"/>
					</div>            
						<br>${message}</br>           
						<button class={styles.formButton} type="button" onclick={SubForm}>Login</button>
				</form>
			</div>
			<UserPage />
		</div>
	)
}
  
export default TestPage;