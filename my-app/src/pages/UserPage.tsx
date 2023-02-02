import 'bootstrap/dist/css/bootstrap.min.css';
// import { Header } from './components/Header'
// import { Users } from './components/Users'
// import { DisplayBoard } from './components/DisplayBoard'
// import CreateUser from './components/CreateUser'
import { getAllUsers, createUser } from '../services/services'
import { createSignal, For } from 'solid-js';

const [user, setUser] = createSignal({})
const [users, setUsers] = createSignal([])
const [numberOfUsers, setNumberOfUsers] = createSignal(0)

const createUserCaller = (e: any) => {
    createUser([])
    .then((response: any) => {
        console.log(response);
        setNumberOfUsers(numberOfUsers() + 1)
    });
    setUser({})
  }

const getAllUsersCaller = () => {
  getAllUsers()
    .then((users: never[]) => {
      console.log(users)
      setUsers(users) 
      setNumberOfUsers(users.length)
    });
}

// const onChangeForm = (e: { target: { name: string; value: any; }; }) => {
//     let user = user()
//     if (e.target.name === 'firstname') {
//         user.firstName = e.target.value;
//     } else if (e.target.name === 'lastname') {
//         user.lastName = e.target.value;
//     } else if (e.target.name === 'email') {
//         user.email = e.target.value;
//     }
//     setUser(user)
// }

export const UserPage = () => {  
  return (
    <div>
      {/* <Header></Header> */}
      USERS:
      <For each={users()}>{user => <li>
        <a target="_blank" href="">
          {user['firstName']}
        </a>
      </li>}
      </For>
      <div>
        <button onClick={getAllUsersCaller}>Log Users</button>
        <button onClick={createUserCaller}>Create User</button>
        <div>
          <div>
              {/* <CreateUser 
                user={user}
                onChangeForm={this.onChangeForm}
                createUser={this.createUser}
                >
              </CreateUser> */}
          </div>
          <div>
              {/* <DisplayBoard
                numberOfUsers={numberOfUsers}
                getAllUsers={this.getAllUsers}
              >
              </DisplayBoard> */}
          </div>
        </div>
      </div>
      <div>
        {/* <Users users={users}></Users> */}
      </div>
    </div>
  );
}

export default UserPage;