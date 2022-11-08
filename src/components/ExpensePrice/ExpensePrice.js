import "./ExpensePrice.css";

const ExpensePrice = ({ price }) => {
  let priceColor;
  if (price < 100) priceColor = "#22c55e";
  else if (price < 500) priceColor = "#facc15";
  else if (price < 1000) priceColor = "#f97316";
  else priceColor = "#ef4444";
  return (
    <p
      className={"expense-item__price"}
      style={{ backgroundColor: priceColor }}
    >
      &#36;{price}
    </p>
  );
};

export default ExpensePrice;
