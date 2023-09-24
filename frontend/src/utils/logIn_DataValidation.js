export function logIn_dataValidation(logInData, errors, setError){
    let newErrors = { ...errors };

    if (logInData.user_name.trim() == "") {
      newErrors.user_name = "Name is required";
    } else {
      newErrors.user_name = "";
    }

    if (logInData.password.trim() == "") {
      newErrors.password = "Password is required";
    } else {
      newErrors.password = "";
    }
    setError(newErrors);
}