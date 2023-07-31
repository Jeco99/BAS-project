import logoImage from "/src/assets/images/BAS-Logo-1.png";
import { useState } from "react";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const [errors, setError] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInData({
      ...logInData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { ...errors };

    if (logInData.username.trim() == "") {
      newErrors.username = "Name is required";
    } else {
      newErrors.username = "";
    }

    if (logInData.password.trim() == "") {
      newErrors.password = "Password is required";
    } else {
      newErrors.password = "";
    }
    setError(newErrors);

    if (logInData.username === "user" && logInData.password === "user") {
      location.href = "/root";
    }
    if (logInData.username === "admin" && logInData.password === "admin") {
      location.href = "/admin";
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const createaccountUser = () => {
    location.href = "/createaccount";
  };

  return (
    <div className="fixed inset-0 flex flex-col sm:flex-row items-center justify-center bg-beetleGreen  px-2 sm:p-12">
      <img
        className=" w-6/12 sm:w-5/12"
        src={logoImage}
        alt="Barangay Appointment System Logo"
      />

      <form
        className="bg-beetleGreen block border border-black rounded-lg shadow w-full p-2 sm:p-12 m-24"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl sm:text-5xl font-extrabold mb-6">
          Log in
        </h1>
        <div className="mb-4">
          <div>
            <label htmlFor="username" className="text-xl">
              Username <sup>*</sup>
            </label>
          </div>
          <input
            className="w-full text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
          />
          {errors.username && <small>{errors.username}</small>}
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
            className="flex justify-center items-center rounded-full text-xl h-11 text-white bg-morningGlory w-full sm:w-auto mb-4 sm:mb-2"
          >
            Log In
          </button>
          <button
            to="createaccount"
            type="button"
            className="flex justify-center items-center rounded-full  text-xl h-11 text-white bg-morningGlory w-full sm:w-auto"
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
