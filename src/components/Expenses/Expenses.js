import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import ExpensesDatePicker from "../ExpensesDatePicker/ExpensesDatePicker";
import { useState } from "react";
import ExpensesList from "../ExpensesList/ExpensesList";

const Expenses = ({ expenses }) => {
  const [currentYear, setCurrentYear] = useState(2022);

  const generateExpenseItems = (currentYear, expenses) => {
    const filteredItems = expenses.filter(
      ({ date }) => date.getFullYear() === currentYear
    );
    if (filteredItems.length === 0) return <h2> No expenses found.</h2>;

    return filteredItems.map(({ id, title, price, date }) => (
      <ExpenseItem key={id} title={title} price={price} date={date} />
    ));
  };

  return (
    <Card>
      <div className={"expenses"}>
        <div className={"expenses-header"}>
          <h2 className={"expenses-header__title"}>Filter by Year</h2>
          <ExpensesDatePicker
            currentYear={currentYear}
            onYearChange={setCurrentYear}
          />
        </div>
        <ExpensesList
          expenseList={generateExpenseItems(currentYear, expenses)}
        />
      </div>
    </Card>
  );
};

export default Expenses;
