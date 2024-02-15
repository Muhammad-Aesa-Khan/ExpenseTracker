import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props){

    const saveExpenseDataHandler = (saveExpenseData)=>{
        const expenseData = {
            ...saveExpenseData,
            id: Math.random().toString() 
        }
        // console.log('Form New Expense');
        
        // passing the data to the child to parent
        props.onAddNewExpenseData(expenseData);
        // console.log(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    );
}

export default NewExpense;