import ExpensesList from './components/Expenses/ExpensesList';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const addNewExpenseHandler = (enteredData) => {
    console.log(' >>>', enteredData);
  }

  const expenses = [
    {
      date: new Date(2021, 2, 28),
      title: 'Car Insurance',
      amount: 294.67,
    },
    {
      date: new Date(2021, 2, 28),
      title: 'Products',
      amount: 500.00.toFixed(2),
    },
    {
      date: new Date(2021, 2, 28),
      title: 'Pet food',
      amount: 100.00.toFixed(2),
    },
  ]

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler} />
      <ExpensesList items={expenses} />
    </div>
  );
}

export default App;
