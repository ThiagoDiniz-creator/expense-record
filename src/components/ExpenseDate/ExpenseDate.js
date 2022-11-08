import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const day = date.getDate();
  const month = date.toLocaleDateString("pt-br", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className={"expense-item__date"}>
      <div className={"expense-item__day"}>{day}</div>
      <div className={"expense-item__month"}>{month}</div>
      <div className={"expense-item__year"}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
