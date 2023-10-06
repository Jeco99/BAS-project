function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isPasswordValid(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}
  
 export function dataValidation(getData, setErrors, errors) {
  let newErrors = { ...errors };

  if (getData.user_image == "") {
    newErrors.user_image = "Image is Required!";
  } else {
    newErrors.user_image = "";
  }

  if (getData.user_name.trim() == "") {
    newErrors.user_name = "Username is Required";
  } else {
    newErrors.user_name = "";
  }



  if (getData.email.trim() == "") {
    newErrors.email = "Email is Required!";
  } else if(!isEmailValid(getData.email)){
    newErrors.email = "Email must be valid"
  }else {
    newErrors.email = "";
  }

  if (getData.password != getData.confirmpassword) {
    alert("Password not match!");
  }

  if (getData.password.trim() == "") {
    newErrors.password = "Set Password";
  } else if(!isPasswordValid(getData.password)){
    newErrors.password = "Password should be at least 8 characters long and include at least one lowercase, one uppercase, one number, and one special character"
  }else {
    newErrors.password = "";
  }

  if (getData.confirmpassword.trim() == "") {
    newErrors.confirmpassword = "Set Confirm Password";
  } else if(!isPasswordValid(getData.confirmpassword)){
    newErrors.confirmpassword = "Password should be at least 8 characters long and include at least one lowercase, one uppercase, one number, and one special character"
  }else {
    newErrors.confirmpassword = "";
  }

  if (getData.first_name.trim() == "") {
    newErrors.first_name = "First Name is Required!";
  } else {
    newErrors.first_name = "";
  }

  if (getData.middle_name.trim() == "") {
    newErrors.middle_name = "Middle Name is Required!";
  } else {
    newErrors.middle_name = "";
  }

  if (getData.last_name.trim() == "") {
    newErrors.last_name = "Last Name is Required!";
  } else {
    newErrors.last_name = "";
  }

  if (getData.date_of_birth.trim() == "") {
    newErrors.date_of_birth = "Birthday is Required!";
  } else {
    newErrors.date_of_birth = "";
  }

  if (getData.sex.trim() == "") {
    newErrors.sex = "Sex is Required!";
  } else {
    newErrors.sex = "";
  }

  if (getData.civilstatus.trim() == "") {
    newErrors.civilstatus = "Civil Status is Required!";
  } else {
    newErrors.civilstatus = "";
  }

  if (getData.region.trim() == "") {
    newErrors.region = "Region is Required!";
  } else {
    newErrors.region = "";
  }

  if (getData.province.trim() == "") {
    newErrors.province = "Province is Required!";
  } else {
    newErrors.province = "";
  }

  if (getData.municipal.trim() == "") {
    newErrors.municipal = "Municipal is Required!";
  } else {
    newErrors.municipal = "";
  }

  if (getData.barangay.trim() == "") {
    newErrors.barangay = "Barangay is Required!";
  } else {
    newErrors.barangay = "";
  }

  if (getData.zone.trim() == "") {
    newErrors.zone = "Zone is Required!";
  } else {
    newErrors.zone = "";
  }

  if (getData.street.trim() == "") {
    newErrors.street = "Street is Required!";
  } else {
    newErrors.street = "";
  }

  if (getData.zipcode == "") {
    newErrors.zipcode = "Zipcode is Required!";
  } else {
    newErrors.zipcode = "";
  }

  setErrors(newErrors);
}
