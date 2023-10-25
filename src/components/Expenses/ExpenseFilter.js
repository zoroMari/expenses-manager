import './ExpenseFilter.css';

export default function ExpenseFilter(props) {
  const dateChangeHandler = (e) => props.onChangeDate(e.target.value);

  return (
    <div className='filter'>
      <div className='expenses-filter'>
        <div className='expenses-filter__control'>
          <label>Filter by year</label>
          <select value={props.defaultDate} onChange={dateChangeHandler}>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
          </select>
        </div>
      </div>
    </div>
  )
}