import React,{useState} from 'react';
import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";
const NewExpenses=(props) =>
{
   const[isEditing,setisEditing] =useState(false);
const saveExpenseDataHandler=(enteredExpenseData) =>
{
    const expenseData={
...enteredExpenseData,
id:Math.random().toString()
};
props.onAddExpense(expenseData);
};
const StartEditingHandler=()=>
{
    setisEditing(true);
};
const StopEditingHandler=()=>
{
    setisEditing(false);
};

    return (<div className="new-expense">

   {!isEditing && <button onClick={StartEditingHandler}>ADD NEW EXPENSE</button>}
   {!isEditing && <button onClick={<h1>Sorry no transaction yet</h1>}>SHOW MONTHLY TRANSACTION</button>}
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}
    onCancel={StopEditingHandler} />}

    </div>);
};
export default NewExpenses;