import React,{useState} from 'react';
import './ExpenseForm.css';
function ExpenseForm(props)
{
    const [enteredTitle,setEnteredTitle] =useState('');
   const [enteredAmount,setEnteredAmount]= useState('')
   const [enteredDate,setEnteredDate]= useState('')
function titleChangeHandler(event)
{
   
    setEnteredTitle(event.target.value);
};
function amountChangeHandler(event)
{
   
    setEnteredAmount(event.target.value);
};
function dateChangeHandler(event)
{
   
    setEnteredDate(event.target.value);
};
function submitHandler(event)
{
event.preventDefault();
const expenseData=
{
    title: enteredTitle,
    amount: +enteredAmount,
    date: new Date(enteredDate)

};
props.onSaveExpenseData(expenseData);
setEnteredAmount('');
setEnteredDate('');
setEnteredTitle('');
};

return (<form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
<div className='new-expense__control'>
    <label>title</label>
    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
</div>
<div className='new-expense__control'>
    <label>amount</label>
    <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
</div>
<div className='new-expense__control'>
    <label>date</label>
    <input type='date' min="2020-09-01" max="2023-09-01" value={enteredDate} onChange={dateChangeHandler} />
</div>
    </div>
    <div className='new-expense__actions'>
        <button type="button" onClick={props.onCancel} >Cancel</button>
    <button type='submit'>add expense</button>
    </div>
</form>
);
};
export default ExpenseForm;