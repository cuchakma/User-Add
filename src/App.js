import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((previousData) => {
      return [...previousData, {id: Math.random(),name: userName, age: userAge}];
    });
  }

  return (
    <div>
        <AddUser onAddUser={addUserHandler}/>
        <UsersList users={usersList}/>
    </div>
  );
}

export default App;
