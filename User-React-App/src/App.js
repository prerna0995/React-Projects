import React, { useState } from 'react';
import AddUsers from './components/users/AddUsers';
import UsersList from './components/users/UsersList';


function App() {

  const [userList, setuserList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setuserList((prevUserState) => {
        return [
          ...prevUserState, 
          {name: userName, age: userAge, id: Math.random().toString()}
        ]
    });
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
