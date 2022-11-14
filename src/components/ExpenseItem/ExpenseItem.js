import { useState } from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import ExpensePrice from "../ExpensePrice/ExpensePrice";

const ExpenseItem = ({ date, title, price }) => {
    const [newTitle, setTitle] = useState(title);

  return (
    <div className={"expense-item"}>
      <ExpenseDate date={date} />
      <h1 className={"expense-item__title"}>{newTitle}</h1>
      <ExpensePrice price={price} />
    </div>
  );
};

export default ExpenseItem;

