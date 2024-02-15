import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // instead of the above three states we can use a single state

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // here we will set and update all the inputes
        
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // if we have loaded more states then i can  give us the old values
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });

        // but this method i will depend on the previous state
        // setUserInput((prev)=>{
            
        //     return ({
        //         ...prev,
        //         enteredAmount: event.target.value
        //     });

        // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    }

    const saveFormData = (event)=>{

        event.preventDefault();

        const dataObj = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };
    
        if(dataObj.title !== '' && dataObj.amount !== '' && dataObj.date !== ''){
            props.onSaveExpenseData(dataObj);
            // console.log(dataObj);
        }

        // after submitting the form date then we want to the clear all the states variables

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    return(
        <form onSubmit={saveFormData}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle}  onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min='2019-01-01' max='2023-12-31' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;