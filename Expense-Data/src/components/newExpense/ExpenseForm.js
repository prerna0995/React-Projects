import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    // const [userInput, setuserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     title: event.target.value,
        // });
        
        // setuserInput((prevState) => {
        //     return {...prevState, title: event.target.value,};
        // });
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     title: event.target.value,
        // });
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     title: event.target.value,
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expense = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };
        console.log('Expense Form - ', expense);
        props.onSubmitExpenseForm(expense);

        // setTitle('');
        // setAmount('');
        // setDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type={'text'} value={title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type={'number'} value={amount} min={'0.01'} step={'0.01'} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type={'date'} value={date} min={'2019-01-01'} max={'2022-12-31'} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
