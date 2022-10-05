import Card from '../Wrapper/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import Chart from '../Chart/Chart';
import { useState } from 'react';
import './Expenses.css';
const Expenses = (props) => {
  let expenseList = [];
  let chartArray = [
    {
      value: 0,
      label: 'Jan',
    },
    {
      value: 0,
      label: 'Feb',
    },
    {
      value: 0,
      label: 'Mar',
    },
    {
      value: 0,
      label: 'Apr',
    },
    {
      value: 0,
      label: 'May',
    },
    {
      value: 0,
      label: 'Jun',
    },
    {
      value: 0,
      label: 'Jul',
    },
    {
      value: 0,
      label: 'Aug',
    },
    {
      value: 0,
      label: 'Sep',
    },
    {
      value: 0,
      label: 'Oct',
    },
    {
      value: 0,
      label: 'Nov',
    },
    {
      value: 0,
      label: 'Dec',
    },
  ];
  const [selectedYear, setSelectedYear] = useState('2022');

  if (Array.isArray(props.list)) {
    expenseList = props.list
      .filter((element) => element.date.getFullYear().toString() == selectedYear)
      .map((ele, key) => {
        console.log(ele.date.getMonth());
        chartArray[ele.date.getMonth()].value += ele.price;
        return <ExpenseItem key={key} name={ele.name} date={ele.date} price={ele.price}></ExpenseItem>;
      });
  }
  const expenseFilterChangeHandler = (year) => {
    for (let month of chartArray) {
      month.value = 0;
    }
    setSelectedYear(year);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter onExpenseFilterChange={expenseFilterChangeHandler} selectedYear={selectedYear}></ExpensesFilter>
      <Chart chartArray={chartArray}></Chart>
      {expenseList}
    </Card>
  );
};
export default Expenses;
