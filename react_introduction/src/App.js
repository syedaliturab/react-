import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
import { useState } from 'react';
function App() {
  const expenses = [
    {
      name: 'Car',
      date: new Date(),
      price: 45,
    },
    {
      name: 'Food',
      date: new Date(),
      price: 450,
    },
    {
      name: 'Clothes',
      date: new Date(),
      price: 50,
    },
  ];
  const [expenseList, setexpenseList] = useState(expenses);
  const addExpenseHandler = (expense) => {
    setexpenseList((preState) => {
      return [...preState, expense];
    });
  };

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler}></NewExpenses>
      <Expenses list={expenseList}></Expenses>;
    </div>
  );
}
export default App;
