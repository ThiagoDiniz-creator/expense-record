import "./AddExpenseForm.css";
import { useState } from "react";
import getCurrentDate from "../../utils/date";

const AddExpenseForm = ({ onExpenseAdded, onExitHandler }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState(0.0);
  const [enteredDate, setEnteredDate] = useState(getCurrentDate);

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setEnteredPrice(e.target.value);
  };

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dateArray = enteredDate.split("-");

    const expenseData = {
      id: Math.random(),
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(dateArray[0], dateArray[1], dateArray[2]),
    };

    onExpenseAdded(expenseData);

    setEnteredTitle("");
    setEnteredPrice(0);
    setEnteredDate(getCurrentDate);
  };

  return (
    <form className={"add-expense__form"} onSubmit={handleSubmit}>
      <div>
        {" "}
        <label className={"form-label"} htmlFor={"title"}>
          Title
        </label>
        <input
          className={"form-input"}
          id={"title"}
          name={"title"}
          type={"text"}
          minLength={3}
          maxLength={25}
          value={enteredTitle}
          onChange={handleTitleChange}
          required={true}
        />
      </div>
      <div>
        {" "}
        <label className={"form-label"} htmlFor={"price"}>
          Price
        </label>
        <input
          className={"form-input"}
          id={"price"}
          name={"price"}
          type={"number"}
          min={0}
          value={enteredPrice}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <label className={"form-label"} htmlFor={"date"}>
          Date
        </label>
        <input
          className={"form-input"}
          id={"date"}
          name={"date"}
          type={"date"}
          min={"2018-01-01"}
          max={getCurrentDate()}
          value={enteredDate}
          onChange={handleDateChange}
        />
      </div>
      <div className={"add-expense__button-control"}>
        <button
          className={"button button--red add-expense__button"}
          onClick={onExitHandler}
        >
          Exit
        </button>{" "}
        <button
          className={"button button--green add-expense__button"}
          type={"submit"}
        >
          Finish
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
