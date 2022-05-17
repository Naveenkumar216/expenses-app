import "./NewExpense.css";
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log("Coming from : NewExpense.js : ");
        console.log(expenseData);
        props.onDataSubmit(expenseData);
    }


    return (
            <div className="new-expense">
               <ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} />
            </div>

    );
}

export default NewExpense;