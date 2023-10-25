import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

export default function NewExpense(props) {
  const [isAddingNewExpense, setIsAddingNewExpense] = useState(false);

  const addHandler = () => setIsAddingNewExpense(true);

  const saveExpenseHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString(),
    }

    setIsAddingNewExpense(false);
    props.onAddNewExpense(expenseData);
  }

  const cancelHandler = () => {
    setIsAddingNewExpense(false);
  }

  return (
    <div className='new-expense'>
      {!isAddingNewExpense && <button onClick={addHandler}>Add New Expense</button>}
      {isAddingNewExpense && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={cancelHandler} />}
    </div>
  )
}