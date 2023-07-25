import React, { useState } from 'react';

const DataValidationExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password:''
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the data before submitting
    let newErrors = { ...errors };
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
    } else {
      newErrors.name = '';
    }

    if (formData.password.trim() === '') {
        newErrors.password = 'Passwprd is required';
      } else {
        newErrors.password = '';
      }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    } else {
      newErrors.email = '';
    }

    // If there are no errors, proceed with form submission
    if (newErrors.name === '' && newErrors.email === '') {
      // Here, you can handle the form submission, e.g., send data to the server
      console.log('Form data:', formData);
    }

    setErrors(newErrors);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <div>{errors.name}</div>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}

        />
        {errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <div>{errors.password}</div>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataValidationExample;
