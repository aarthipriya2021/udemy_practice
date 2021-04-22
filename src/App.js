import React, {useState} from 'react';
import { AddUser} from './components/Users/AddUser'
import { UsersList} from '../src/components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([])

  const addUsersHandler = (uName, uAge) =>{
    setUsersList(prevUsersList => {
      return [...prevUsersList, {name: uName, age:uAge, id:Math.random().toString() }]
    })
  }

  const deleteHandler = (uId) => {
  setUsersList (prevUsersList => {

    const updatedUserList = prevUsersList.filter(user => user.id !== uId);
    return updatedUserList;
  });
  }

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (usersList.length > 0) {
    content = (
      <UsersList users={usersList} onDeleteItem={deleteHandler} />
    );
  }
  return (
    <div>
        <AddUser onAddUser={addUsersHandler}/>
        <section>
          {content}
        </section>
        {/* <UsersList users={usersList} /> */}
    </div>
  );
}

export default App;
