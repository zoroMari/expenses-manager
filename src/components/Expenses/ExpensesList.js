import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';

export default function ExpensesList({items}) {
  const [dateFiltered, setDateFiltered] = useState(2020);
  const filterHandler = (date) => {
    setDateFiltered(date);
    console.log(' >>>', date);
  }

  return (
    <div>
      <ExpenseFilter defaultDate={dateFiltered} onChangeDate={filterHandler} />

      <Card className='expenses'>
        <ExpenseItem date={items[0].date} title={items[0].title} amount={items[0].amount} />
        <ExpenseItem date={items[1].date} title={items[1].title} amount={items[1].amount} />
        <ExpenseItem date={items[2].date} title={items[2].title} amount={items[2].amount} />
      </Card>
    </div>
  )
}