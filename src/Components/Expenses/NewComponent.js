

import React,{useState} from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";

import ExpensesList from "./ExpensesList";
import './NewComponent.css'


function NewComponent(props)
{
      
    const[filteredYear,setSelectedYear] = useState('2020');
    
    const filteredExpenses=props.items.filter(expense=> 
      {
       return expense.date.getFullYear().toString()=== filteredYear;
      }
      );
      const filterChangeHandler=selectedyear=>
      {
            setSelectedYear(selectedyear);

      }
      
    
return (
      <div>
            
<Card className="expenses">
<ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
{/* {filteredExpenses.length===0 ? <p>no expense found</p> : filteredExpenses.map(expense=> <ExpenseItem key={expense.id} title={expense.title} amount ={expense.amount} date={expense.date} />)} */}
{/* {filteredExpenses.length===0 && <p>no expense found</p>}
{filteredExpenses.length>0 && filteredExpenses.map(expense=> <ExpenseItem key={expense.id} title={expense.title} amount ={expense.amount} date={expense.date} />)} */}

   {/* <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date}></ExpenseItem>
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date}></ExpenseItem>
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date}></ExpenseItem>
      <ExpenseItem title={props.items[3].title} amount={props.items[3].amount} date={props.items[3].date}></ExpenseItem> */} 
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
</Card>;
</div>
);
}
export default NewComponent