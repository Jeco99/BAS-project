export function appointmentDataValidation(
    errors, 
    request,
    purpose,
    selectTime,
    setErrors
) {
  let newErrors = { ...errors };

  if (request == "") {
    newErrors.request = "Set request";
  } else {
    newErrors.request = "";
  }

  if (purpose == "") {
    newErrors.purpose = "Set purpose";
  } else {
    newErrors.purpose = "";
  }

  if (selectTime == "") {
    newErrors.selectTime = "Set Select Time";
  } else {
    newErrors.selectTime = "";
  }

  setErrors(newErrors);
}
