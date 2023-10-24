import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {
  const saveExpenseHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    }

    props.onAddNewExpense(expenseData);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  )
}