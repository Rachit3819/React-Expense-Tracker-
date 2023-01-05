import  "./ExpenceItem.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
//import ExpenseDetails from "./ExpenseDetails";
const ExpenceItem=(props)=> {
 
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.Title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>{props.Amount}</h2>
      </div>
      <div className=".expense-item__id">
        <h2>{props.id}</h2>
      </div>
    </div>
  );
}
export default ExpenceItem;
