const getMonthName = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[date.getMonth()];
};

const getCurrentDate = (format) => {
  // Get Current Month and Date
  const currentTime = new Date();
  const currentMonth = getMonthName(currentTime);
  const currentDate = currentTime.toISOString().slice(8, 10);

  switch (format) {
    case "MONTH":
      return currentMonth;
    case "DATE":
      return currentDate;
    case "MONTH_AND_DATE":
      return currentMonth + " " + currentDate;
    default:
      return currentMonth + " " + currentDate;
  }
};

export default getCurrentDate;
