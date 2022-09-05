import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {

  const[filteredYear, setFilteredYear] = useState('2020');

  const changeFilterHandler = (selectedYear) => {
    console.log('Expenses - ', selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.data.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
    <div className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList data={filteredExpenses}/>
      {/* {filteredExpenses.length === 0 ? (
          <p>No Expense Found</p>
        ) : (
          filteredExpenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* {filteredExpenses.length === 0 && <p>No Expense Found</p>}
        {filteredExpenses.length > 0 && (
          filteredExpenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          )) 
        )} */}
    </div>
  );
}

export default Expenses;
