import "./AddExpense.css";
import {useState} from "react";

const AddExpense = () => {
  // Configuring the current Date.
  const today = new Date(Date.now());
  const dateMax = `${today.getFullYear()}-${today.getMonth()}-${today.toLocaleDateString(
    "en-us",
    { day: "2-digit" }
  )}`;

  // Handling submit
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={"add-expense"} >
      <h1 className={"add-expense__title"}>
        Add new expense
      </h1>
      <form className={"add-expense__form"} onSubmit={submitHandler}>
        <div >
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
            maxLength={20}
          />
        </div>
        <div >
          {" "}
          <label className={"form-label"} htmlFor={"price"}>
            Price
          </label>
          <input
            className={"form-input"}
            id={"price"}
            name={"price"}
            type={"number"}
            min={0.01}
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
            max={dateMax}
          />
        </div>
        <div className={"add-expense__button-control"}>
          <button className={"button button--green add-expense__button"} type={"submit"}>Finish</button>
        </div>
      </form>
    </div>
  );
};

export default AddExpense;
