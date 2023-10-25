import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses({items}) {
  const [dateFiltered, setDateFiltered] = useState('2023');
  const filterHandler = (date) => {
    setDateFiltered(date);
  }

  const filteredExpenses = items.filter((item) => item.date.getFullYear().toString() === dateFiltered);

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter defaultDate={dateFiltered} onChangeDate={filterHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredItems={filteredExpenses} />
      </Card>
    </div>
  )
}