 export function dataValidation(getData, setErrors, errors) {
  let newErrors = { ...errors };

  if (getData.user_image == "") {
    newErrors.user_image = "Set user_image";
  } else {
    newErrors.user_image = "";
  }

  if (getData.user_name.trim() == "") {
    newErrors.user_name = "Set user_name";
  } else {
    newErrors.user_name = "";
  }

  if (getData.email.trim() == "") {
    newErrors.email = "Set Email";
  } else {
    newErrors.email = "";
  }

  if (getData.password != getData.confirmpassword) {
    alert("password not match!");
  }

  if (getData.password.trim() == "") {
    newErrors.password = "Set Password";
  } else {
    newErrors.password = "";
  }

  if (getData.confirmpassword.trim() == "") {
    newErrors.confirmpassword = "Set Confirm Password";
  } else {
    newErrors.confirmpassword = "";
  }

  if (getData.first_name.trim() == "") {
    newErrors.first_name = "Set first_name";
  } else {
    newErrors.first_name = "";
  }

  if (getData.middle_name.trim() == "") {
    newErrors.middle_name = "Set middle_name";
  } else {
    newErrors.middle_name = "";
  }

  if (getData.last_name.trim() == "") {
    newErrors.last_name = "Set last_name";
  } else {
    newErrors.last_name = "";
  }

  if (getData.date_of_birth.trim() == "") {
    newErrors.date_of_birth = "Set Birthday";
  } else {
    newErrors.date_of_birth = "";
  }

  if (getData.sex.trim() == "") {
    newErrors.sex = "Set Sex";
  } else {
    newErrors.sex = "";
  }

  if (getData.civilstatus.trim() == "") {
    newErrors.civilstatus = "Set Civil Status";
  } else {
    newErrors.civilstatus = "";
  }

  if (getData.region.trim() == "") {
    newErrors.region = "Set Region";
  } else {
    newErrors.region = "";
  }

  if (getData.province.trim() == "") {
    newErrors.province = "Set Province";
  } else {
    newErrors.province = "";
  }

  if (getData.municipal.trim() == "") {
    newErrors.municipal = "Set Municipal";
  } else {
    newErrors.municipal = "";
  }

  if (getData.barangay.trim() == "") {
    newErrors.barangay = "Set Barangay";
  } else {
    newErrors.barangay = "";
  }

  if (getData.zone.trim() == "") {
    newErrors.zone = "Set Zone";
  } else {
    newErrors.zone = "";
  }

  if (getData.street.trim() == "") {
    newErrors.street = "Set Street";
  } else {
    newErrors.street = "";
  }

  if (getData.zipcode == "") {
    newErrors.zipcode = "Set Zipcode";
  } else {
    newErrors.zipcode = "";
  }

  setErrors(newErrors);
}
