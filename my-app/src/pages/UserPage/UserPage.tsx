import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllUsers, createUser } from '../../services/services'
import { createSignal, For } from 'solid-js';

const [user, setUser] = createSignal({})
const [users, setUsers] = createSignal([])
const [numberOfUsers, setNumberOfUsers] = createSignal(0)

const createUserCaller = (e: any) => {
    createUser([])
    .then((response: any) => {
        setNumberOfUsers(numberOfUsers() + 1)
    });
    setUser({})
  }

const getAllUsersCaller = () => {
  getAllUsers()
    .then((users: never[]) => {
      setUsers(users) 
      setNumberOfUsers(users.length)
    });
}

export const UserPage = () => {  
  return (
    <div>
      USERS:
      <For each={users()}>{user => 
        <li>
          {user['firstName']}
        </li>}
      </For>
      <div>
        <button onClick={getAllUsersCaller}>Log Users</button>
        <button onClick={createUserCaller}>Create User</button>
      </div>
    </div>
  );
}

export default UserPage;