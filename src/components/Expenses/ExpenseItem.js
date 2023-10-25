import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

export default function ExpenseItem({date, title, amount, onDelete}) {

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />

        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
          <button onClick={() => onDelete()} className='deleteExpense'>X</button>
        </div>
      </Card>
    </li>
  );
}
