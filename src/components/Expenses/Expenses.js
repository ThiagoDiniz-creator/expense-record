import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

const Expenses = ({ expenses }) => {
  return (
    <Card>
      <div className={"expenses"}>
        {expenses.map(({ id, title, amount, date }) => (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        ))}
      </div>
    </Card>
  );
};

export default Expenses;
