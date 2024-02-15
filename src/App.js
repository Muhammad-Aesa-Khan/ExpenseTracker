import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const dummy_expenses = [
  {id:'e1', title: 'Car Insurense', amount: 499.98, date: new Date(2020, 2, 28) },
  {id:'e2', title: 'House Rent', amount: 399.98, date: new Date(2022, 4, 26) },
  {id:'e3', title: 'Grossrie', amount: 299.98, date: new Date(2023, 6, 24) },
  {id:'e4', title: 'Milk', amount: 199.98, date: new Date(2023, 8, 22) }
];


function App() {

  const [expenses , setExpenses] = useState(dummy_expenses);
  

  const addNewExpenseData = addExpenseData=>{
    setExpenses(prevData=>{
      return [addExpenseData, ...prevData];
    });
  }

  return (
    <div>
      <NewExpense onAddNewExpenseData={addNewExpenseData}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );

}

export default App;
