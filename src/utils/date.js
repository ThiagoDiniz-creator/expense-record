const getCurrentDate = () => {
  // Configuring the current Date to fit the input format.
  const today = new Date(Date.now());
  return `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.toLocaleDateString("en-us", { day: "2-digit" })}`;
};

export default getCurrentDate;
