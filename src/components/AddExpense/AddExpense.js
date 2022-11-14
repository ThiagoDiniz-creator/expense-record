import "./AddExpense.css";
import AddExpenseForm from "../AddExpenseForm/AddExpenseForm";
import { useState } from "react";

const AddExpense = ({ addExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => setShowForm((prev) => !prev);

  if (!showForm)
    return (
      <div className={"add-expense flex-center"}>
        <button className={"button button--green"} onClick={handleClick}>
          Add expense
        </button>
      </div>
    );

  return (
    <div className={"add-expense"}>
      <h1 className={"add-expense__title"}>Add new expense</h1>
      <AddExpenseForm onExpenseAdded={addExpense} onExitHandler={handleClick}/>
    </div>
  );
};

export default AddExpense;
