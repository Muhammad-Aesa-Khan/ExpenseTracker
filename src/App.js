import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

function App() {

  const expenses = [
    {title: 'Car Insurense', amount: 499.98, date: new Date(2020, 2, 28) },
    {title: 'House Rent', amount: 399.98, date: new Date(2021, 4, 26) },
    {title: 'Grossrie', amount: 299.98, date: new Date(2022, 6, 24) },
    {title: 'Milk', amount: 199.98, date: new Date(2023, 8, 22) }
  ];

  const addNewExpenseData = (ddExpenseData)=>{
    const dExpenseData = {
      ...ddExpenseData
    }

    console.log('Form app js');
    console.log(dExpenseData);
  }

  return (
    <div>
      <NewExpense onAddNewExpenseData={addNewExpenseData}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );

}

export default App;
