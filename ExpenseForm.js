import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [EnteredTitle,setEnteredTitle]=useState('')
  const [EnteredAmount,setEnteredAmount]=useState('')
  const [EnteredDate,setEnteredDate]=useState('')

    // const [userInput,setuserInput]=useState({
    //   Enteredtitle:'',
    //   EnteredAmount:'',
    //   EnteredDate:'',
    // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value,)
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value,
    )
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value,)
  };
  const SubmitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
      title:EnteredTitle,
      amount:EnteredAmount,
      date:EnteredDate,
    }
    console.log(expenseData)
  }

  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="Submit" onClick={SubmitHandler}>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
