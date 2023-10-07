export function post_Validation(postDetails, errors, setErrors) {
  let newErrors = { ...errors };

  if (postDetails.title.trim() === "") {
    newErrors.title = "Title is required";
  } else {
    newErrors.title = "";
  }

  if (postDetails.description.trim() === "") {
    newErrors.description = "Description is required";
  } else {
    newErrors.description = "";
  }
  
  setErrors(newErrors);
}
