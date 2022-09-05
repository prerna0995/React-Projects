import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [showExpenseForm, setShowExpenseForm] = useState(false);

    const saveExpenseDataHandler = (newExpense) => {
        const expense = {
            ...newExpense,
            id: Math.random().toString()
        };
        console.log('New Expense - ', expense);
        props.onSaveNewExpense(expense);
        setShowExpenseForm(false);
    };

    const showFormHandler = () => {
        setShowExpenseForm(true);
    };

    const hideFormHandler = () => {
        setShowExpenseForm(false);
    };

    return (
        <div className="new-expense" >
            {!showExpenseForm && (<button type="button" onClick={showFormHandler}>Add New Expense</button>)}
            {showExpenseForm && (
                <ExpenseForm 
                    onSubmitExpenseForm={saveExpenseDataHandler} 
                    onCancel={hideFormHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;