function monthConversion(monthNum) {
  const monthCollection = [
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

  let found = monthCollection.findIndex((element) => element == monthNum) + 1;
  return found;
}

export function DateFormatted(date) {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.getDate();
  return `${year}-${monthConversion(month)}-${day}`;
}

export function getTomorrowDate() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow;
}
