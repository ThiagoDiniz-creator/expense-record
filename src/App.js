import React from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/AddExpense/AddExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 10,
      date: new Date(2022, 11, 1),
    },
    {
      id: "e2",
      title: "Flowers",
      amount: 30,
      date: new Date(2022, 10, 23),
    },
    {
      id: "e3",
      title: "Twitch subscription",
      amount: 4.99,
      date: new Date(2022, 10, 29),
    },
    {
      id: "e4",
      title: "Notebook 200pages",
      amount: "10",
      date: new Date(2022, 10, 21),
    },
  ];

  return (
    <div className="App">
      <AddExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
