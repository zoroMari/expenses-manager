import { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState(''); 
  const [enteredAmount, setEnteredAmount] = useState(''); 
  const [enteredDate, setEnteredDate] = useState(''); 


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredData = {
      title: enteredTitle,
      amount: (+enteredAmount).toFixed(2),
      date: new Date(enteredDate),
    }

    props.onSaveExpense(enteredData);
    clearForm();
  }

  const cancelHandler = () => {
    props.onCancel();
    clearForm();
  }

  const clearForm = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type='text' 
            value={enteredTitle} 
            onChange={titleChangeHandler} 
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number' 
            min='0.01' 
            step='0.01' 
            value={enteredAmount}
            onChange={amountChangeHandler} 
          />
        </div>

        <div className='new-expense__control date'>
          <label>Date</label>
          <input 
            type='date' 
            min='2019-01-01' 
            max='2022-12-31' 
            value={enteredDate}
            onChange={dateChangeHandler} 
          />
        </div>
        </div>

        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
          <button onClick={cancelHandler}>Cancel</button>
        </div>
    </form>
  )
}