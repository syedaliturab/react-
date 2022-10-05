import './ExpenseForm.css';
import { useState } from 'react';
const ExpenseForm = (props) => {
  const expenseDataHandler = (event) => {
    event.preventDefault();
    props.onNewExpense({
      name: item,
      date: new Date(expenseDate),
      price: parseInt(amount),
    });
    setAmount('');
    setDate('');
    setItem('');
    props.onExpenseFormButtonClick();
  };
  const cancelButtonHandler = () => {
    props.onExpenseFormButtonClick();
  };
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');
  const [expenseDate, setDate] = useState('');
  const itemHandler = (event) => {
    setItem(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };
  const expenseDateHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form onSubmit={expenseDataHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Name:</label>
          <input type="text" onChange={itemHandler} value={item}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount:</label>
          <input type="number" min="1" step="1" value={amount} onChange={amountHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date:</label>
          <input type="date" min="2020-01-01" value={expenseDate} onChange={expenseDateHandler}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelButtonHandler}>Cancel</button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
