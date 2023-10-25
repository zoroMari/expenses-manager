import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

export default function ExpensesList({filteredItems}) {
  if (filteredItems.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }

  return (
    <ul className='expenses-list'>
      {filteredItems.map((item) => (
        <ExpenseItem 
          key={item.id}
          date={item.date} 
          title={item.title} 
          amount={item.amount} 
        />
      ))}
    </ul>
  )
}