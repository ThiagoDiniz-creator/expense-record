import "./ExpensesList.css";

const ExpensesList = ({ expenseList }) => {
  if (expenseList.length === 0) return <h1 className={"not-found"}>No expenses found</h1>;

  return <ul>{expenseList}</ul>;
};

export default ExpensesList;
