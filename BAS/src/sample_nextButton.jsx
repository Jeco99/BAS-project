import React, { useState } from 'react';

const YourFormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add other form fields as needed
  });

  const [validationStatus, setValidationStatus] = useState({
    nameValid: false,
    emailValid: false,
    // Add other fields' validation status as needed
  });

  // Event handler to update form data state when input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Validation function to check if the form data is valid
  const validateForm = () => {
    const { name, email } = formData;
    const nameValid = name.trim() !== ''; // Add your name validation logic here
    const emailValid = /\S+@\S+\.\S+/.test(email); // Basic email validation, you can make it more sophisticated
    setValidationStatus({ nameValid, emailValid });
    return nameValid && emailValid; // Return true only if all fields are valid
  };

  // Event handler for the "Next" button click
  const handleNext = () => {
    if (validateForm()) {
      // Proceed to the next step or submit the form
      console.log('Form data is valid:', formData);
      // Implement your logic here for what to do after validation passes
    } else {
      // Show an error message or take appropriate action for invalid data
      console.log('Form data is invalid.');
    }
  };

  console.log(formData);
  console.log(validationStatus);

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      {/* Render the "Next" button conditionally based on validation */}
      {/* Render the "Next" button conditionally based on validation */}
      {validationStatus.nameValid && validationStatus.emailValid ? (
        <button onClick={handleNext}>Next</button>
      ) : (
        <button disabled>Next</button>
      )}
    </div>
  );
};

export default YourFormComponent;
