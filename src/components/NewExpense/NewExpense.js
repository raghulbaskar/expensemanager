import React  from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    cancel();
  };
  const [button, setbutton] = useState(false);
  function buttonhandler(){
  setbutton(true);
  }
  function cancel(){
    setbutton(false);
  }
  return (
    <div className='new-expense'>
      { !button && <button onClick={buttonhandler}> Add new Expense</button>}
      {button && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {cancel} /> }
    </div>
  );
};

export default NewExpense;
