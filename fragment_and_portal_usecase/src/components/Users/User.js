import React, { useState } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';
import style from './user.module.css';
import Card from '../UI/Card';
const User = () => {
  const [userList, setUserList] = useState([
    {
      name: 'Kafeel',
      age: 6,
    },
    {
      name: 'Ali',
      age: 7,
    },
  ]);
  const newUserHandler = (user) => {
    setUserList((pevStage) => {
      return [...pevStage, user];
    });
  };
  return (
    <React.Fragment>
      <AddUser onNewUser={newUserHandler}></AddUser>
      <Card className={style.users}>
        <ul>
          {userList.map((user) => {
            return <UserList key={user.name + user.age} name={user.name} age={user.age}></UserList>;
          })}
        </ul>
      </Card>
      \
    </React.Fragment>
  );
};
export default User;
