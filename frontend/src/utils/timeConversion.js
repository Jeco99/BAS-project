export function convertTo12HoursFormat(timeIn24Hrs) {
  const timeComponents = timeIn24Hrs.split(":");
  const hours = parseInt(timeComponents[0]);
  const minutes = timeComponents[1];

  const period = hours >= 12 ? "AM" : "PM";
  const convertto12hrs = hours % 12 || 12;
  const timeResults = `${convertto12hrs}:${minutes} ${period}`;

  return timeResults;
}
