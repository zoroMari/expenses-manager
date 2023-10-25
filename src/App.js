import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = localStorage.getItem('myExpenses') ? JSON.parse(localStorage.getItem('myExpenses')).map((item => {
  return {...item, date: new Date(item.date)}
})) : [];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addNewExpenseHandler = (enteredData) => {
    setExpenses((prevState) => [enteredData, ...prevState]);
    localStorage.setItem('myExpenses', JSON.stringify([enteredData, ...expenses]));
  }

  const deleteHandler = (id) => {
    const newExpenses = expenses.filter((item) => item.id !== id);
    setExpenses([...newExpenses]);
    localStorage.setItem('myExpenses', JSON.stringify(newExpenses));
  }

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses onDelete={deleteHandler} items={expenses} />
    </div>
  );
}

export default App;
