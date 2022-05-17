import Expenses from './components/Expenses/Expenses';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';

import React, {useState} from 'react';


const  App = ()=> {

  
  const expenses = [
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
  
  const [,setOldExpenses] = useState(expenses);
  
  const dataSubmitHandler = (data) => {
     const newExpenseObject = {
      ...data
    }
    setOldExpenses(expenses.push(newExpenseObject));
    console.log(expenses);
    console.log("Coming From App.js: ");
    console.log(newExpenseObject);
  }

  return (
          <div>
            <NewExpense onDataSubmit={dataSubmitHandler}/>
            <Expenses items={ expenses }/>
          </div>
          );
}

export default App;

