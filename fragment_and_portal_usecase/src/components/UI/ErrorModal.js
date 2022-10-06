import style from './errorModal.module.css';
import React from 'react';
import Card from './Card';
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      <div className={style.backdrop}></div>
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.tittle}</h2>
        </header>
        <div className={style.content}>
          <p>{props.content}</p>
        </div>
        <footer className={style.actions}>
          <button onClick={props.onCheck}> Okay</button>
        </footer>
      </Card>
    </React.Fragment>
  );
};
export default ErrorModal;
