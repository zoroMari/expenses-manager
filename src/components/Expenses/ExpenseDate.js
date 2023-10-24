import './ExpenseDate.css';

const ExpenseDate = ({date}) => {
  const day = date.toLocaleString('en-Us', {day: '2-digit'});
  const month = date.toLocaleString('en-Us', {month: 'long'});
  const year = date.getFullYear();

  return (
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
    </div>
  )
}

export default ExpenseDate;