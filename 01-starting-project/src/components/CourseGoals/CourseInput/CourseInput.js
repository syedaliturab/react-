import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import style from './CourseInput.module.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.length > 0) {
      props.onAddGoal(enteredValue);
      setEnteredValue('');
    } else {
      setIsValid(false);
      return false;
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${style['form-control']} ${!isValid && style.invalid}`}>
        <label>Course Goal</label>
        <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
