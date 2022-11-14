import "./ExpensesDatePicker.css";

function ExpensesDatePicker({ currentYear, onYearChange }) {
  const changeHandler = (event) => {
    const select = event.target;
    const selectedOption =
      select.querySelectorAll("option")[select.selectedIndex];
    const { value } = selectedOption;
    onYearChange(Number(value));
  };

  const generateOptions = (minYear, maxYear) => {
    const optionsArray = new Array(1 + maxYear - minYear)
      .fill(0)
      .map((val, idx) => minYear + idx);
    return optionsArray.map((value) => (
      <option key={`option-${value}`} id={`option-${value}`} value={value}>
        {value}
      </option>
    ));
  };

  return (
    <select
      className={"expense-date-picker"}
      defaultValue={currentYear}
      onChange={changeHandler}
    >
      {generateOptions(2018, 2022)}
    </select>
  );
}

export default ExpensesDatePicker;
