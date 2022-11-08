import "./Card.css";

const Card = ({ className, children }) => {
  const classes = className ? "card " + className : "card";
  return <div className={classes}>{children}</div>;
};

export default Card;
