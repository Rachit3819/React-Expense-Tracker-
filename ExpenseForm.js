import React from "react"
import "./ExpenseForm.css"
const ExpenseForm=()=>{ 
    const titleChangeHandler=(event)=>{

        console.log(event.target.value)
    }
    return(
        <form>
            <div className="new-expense__control">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step="0.01" onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2022-01-01' max='2025-12-31' onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="Submit">Add Expense</button>
            </div>
        </form>
    )

}
export default ExpenseForm