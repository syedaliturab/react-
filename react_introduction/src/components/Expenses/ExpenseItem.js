import './ExpenseItem.css';
import Card from '../Wrapper/Card';

import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2> {props.name}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
