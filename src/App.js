import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 'sdfs23',
    date: new Date(2021, 2, 28),
    title: 'Car Insurance',
    amount: 294.67,
  },
  {
    id: 'ssdffs33',
    date: new Date(2020, 2, 28),
    title: 'Products',
    amount: 500.00.toFixed(2),
  },
  {
    id: 'edyjr76',
    date: new Date(2021, 2, 28),
    title: 'Pet food',
    amount: 100.00.toFixed(2),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addNewExpenseHandler = (enteredData) => {
    setExpenses((prevState) => [enteredData, ...prevState]);
  }

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
