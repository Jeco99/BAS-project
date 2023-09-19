 export function dataValidation(getData, setErrors, errors) {
  let newErrors = { ...errors };

  if (getData.imagefile == "") {
    newErrors.imagefile = "Set ImageFile";
  } else {
    newErrors.imagefile = "";
  }

  if (getData.username.trim() == "") {
    newErrors.username = "Set Username";
  } else {
    newErrors.username = "";
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

  if (getData.firstname.trim() == "") {
    newErrors.firstname = "Set FirstName";
  } else {
    newErrors.firstname = "";
  }

  if (getData.middlename.trim() == "") {
    newErrors.middlename = "Set MiddleName";
  } else {
    newErrors.middlename = "";
  }

  if (getData.lastname.trim() == "") {
    newErrors.lastname = "Set LastName";
  } else {
    newErrors.lastname = "";
  }

  if (getData.dateofbirth.trim() == "") {
    newErrors.dateofbirth = "Set Birthday";
  } else {
    newErrors.dateofbirth = "";
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

  if (getData.zipcode.trim() == "") {
    newErrors.zipcode = "Set Zipcode";
  } else {
    newErrors.zipcode = "";
  }

  setErrors(newErrors);
}
