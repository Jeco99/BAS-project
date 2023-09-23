import logoImage from "/src/assets/images/BAS-Logo-1.png";
import { useState } from "react";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [logInData, setLogInData] = useState({
    user_name: "",
    password: "",
  });
  const [role, setRole] = useState('');

  const [errors, setError] = useState({
    user_name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInData({
      ...logInData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    try {
      const response = await fetch('http://localhost:3001/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logInData)
      });
      const result = await response.json();
      setRole(result.user_type);

      if(response.status == 200){
        alert(result.message);
      }
      
      if(response.status == 401){
        alert("Status: " + response.status + " "+result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }

  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const createaccountUser = () => {
    location.href = "/createaccount";
  };

  return (
    <div className="block sm:fixed inset-0 flex flex-col sm:flex-row justify-center bg-beetleGreen py-7 h-screen">
      <img
        className=" w-4/12 sm:w-5/12 mx-auto sm:m-auto"
        src={logoImage}
        alt="Barangay Appointment System Logo"
      />
      <form
        className="bg-beetleGreen block border border-black rounded-lg shadow w-3/3 sm:w-1/3 p-5 sm:p-6 m-4 sm:m-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl sm:text-5xl font-extrabold mb-6 text-black drop-shadow-xl">
          Log in
        </h1>
        <div className="mb-4">
          <div>
            <label htmlFor="user_name" className="text-xl">
              Username <sup>*</sup>
            </label>
          </div>
          <input
            className="w-full text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            id="user_name"
            name="user_name"
            type="text"
            onChange={handleChange}
          />
          {errors.user_name && <small>{errors.user_name}</small>}
        </div>

        <div className="mb-4">
          <div>
            <label htmlFor="password" className="text-xl">
              Password <sup>*</sup>
            </label>
          </div>
          <input
            className="w-full text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
          />
          <div>{errors.password && <small>{errors.password}</small>}</div>

          <input type="checkbox" onClick={toggleShowPassword} />
          <label htmlFor="showPassword"> Show Password</label>
        </div>

        <div className="flex flex-col  justify-center">
          <button
            type="submit"
            className="flex justify-center items-center rounded-full text-xl h-11 text-black bg-morningGlory sm:w-full mb-4 sm:mb-2"
          >
            Log In
          </button>
          <button
            type="button"
            className="flex justify-center items-center rounded-full  text-xl h-11 text-black bg-morningGlory  sm:w-full"
            onClick={createaccountUser}
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};
export default LogIn;
