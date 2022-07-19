import React,{useState} from 'react';

import NewComponent from './Components/Expenses/NewComponent';
import NewExpenses from './Components/NewExpense/NewExpenses';
const Dummy_Expense = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
const[expenses,setExpenses] = useState(Dummy_Expense);
  const addExpenseHandler=expense=>
  {
    setExpenses(prevExpense=>{
      return [expense,...prevExpense]
    });
  };
      

  return (
  <div> 
    

      <div>
      
       <NewExpenses onAddExpense={addExpenseHandler}/>
   
      
                          
        <NewComponent items={expenses}></NewComponent>
      </div>
      </div>
 
   
  );
}

export default App;