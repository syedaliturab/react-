import './NewExpenses.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpenses = (props) => {
  const [addButton, setAddButton] = useState(false);
  const addButtonHandler = () => {
    if (addButton) setAddButton(false);
    else setAddButton(true);
  };
  if (addButton == false) {
    return (
      <div className="new-expense">
        <button onClick={addButtonHandler}>Add Expenses</button>
      </div>
    );
  }
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpense={props.onAddExpense} onExpenseFormButtonClick={addButtonHandler}></ExpenseForm>
    </div>
  );
};
export default NewExpenses;
