function isPasswordValid(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}
  
export function logIn_dataValidation(logInData, errors, setError){
    let newErrors = { ...errors };

    if (logInData.user_name.trim() == "") {
      newErrors.user_name = "Name is required";
    }else {
      newErrors.user_name = "";
    }

    if (logInData.password.trim() == "") {
      newErrors.password = "Password is required";
    } else if(!isPasswordValid(logInData.password)){
      newErrors.password = "Password should be at least 8 characters long and include at least one lowercase, one uppercase, one number, and one special character"
    }else {
      newErrors.password = "";
    }
    setError(newErrors);
}