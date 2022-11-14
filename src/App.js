import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/AddExpense/AddExpense";

const MOCK_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    price: 10,
    date: new Date(2022, 11, 1),
  },
  {
    id: "e2",
    title: "Flowers",
    price: 30,
    date: new Date(2022, 10, 23),
  },
  {
    id: "e3",
    title: "Twitch sub",
    price: 4.99,
    date: new Date(2022, 10, 29),
  },
];

function App() {
  const [expenses, setExpenses] = useState(MOCK_EXPENSES);

  const addExpense = (expenseData) =>
    setExpenses((prevState) => [...prevState, expenseData]);

  return (
    <div className="App">
      <AddExpense addExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
