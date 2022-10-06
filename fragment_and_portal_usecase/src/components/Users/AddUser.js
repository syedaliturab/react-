import React, { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import style from './addUser.module.css';
import ReactDOM from 'react-dom';
const AddUser = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [isVaild, setIsValid] = useState(false);
  const [formError, setError] = useState({});
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length > 0 && userAge.length > 0) {
      props.onNewUser({ name: userName, age: userAge });
      setUserAge('');
      setUserName('');
    } else {
      setError({ content: 'Please enter both name and age', tittle: 'Error' });
      setIsValid(true);
      return false;
    }
  };
  const onNameChange = (event) => {
    setUserName(event.target.value);
  };
  const onAgeChange = (event) => {
    setUserAge(event.target.value);
  };
  const closeModalHandler = () => {
    setIsValid(false);
  };
  return (
    <React.Fragment>
      {isVaild &&
        ReactDOM.createPortal(
          <ErrorModal content={formError.content} tittle={formError.tittle} onCheck={closeModalHandler}></ErrorModal>,
          document.getElementById('errorModal'),
        )}
      <Card>
        <form className={style.userForm} onSubmit={onSubmitHandler}>
          <div className={style.form__controls}>
            <div className={style.form__control}>
              <label>User Name</label>
              <input type="text" onChange={onNameChange} value={userName}></input>
            </div>
            <div className={style.form__control}>
              <label>Age</label>
              <input type="number" onChange={onAgeChange} value={userAge} min="1"></input>
            </div>
          </div>

          <div className={style.form__actions}>
            <button type="submit">Add User</button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default AddUser;
