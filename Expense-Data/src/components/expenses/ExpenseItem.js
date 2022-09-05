import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = props => {
  // const expenseDate = new Date(2020, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
