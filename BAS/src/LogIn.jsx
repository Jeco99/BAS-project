
import { Link } from "react-router-dom";
import logoImage from "/src/assets/images/BAS-Logo-1.png";

const LogIn = () => {
  return (
    <div className="fixed inset-0 flex flex-col sm:flex-row items-center justify-center bg-beetleGreen  px-2 sm:p-12">
      <img className=" w-6/12 sm:w-5/12" src={logoImage} alt="Barangay Appointment System Logo"/>

      <form className="bg-beetleGreen block border border-black rounded-lg shadow w-full p-2 sm:p-12 ">
        <h1 className="text-center text-3xl sm:text-5xl font-extrabold mb-6">
          Log in
        </h1>
        <div className="mb-4">
          <div>
            <label htmlFor="email1" className="text-xl">
              Username:
            </label>
          </div>
          <input
            className="w-full text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            id="email1"
            placeholder=""
            required
            type="email"
          />
        </div>

        <div className="mb-4">
          <div>
            <label htmlFor="password" className="text-xl">
              Password:
            </label>
          </div>
          <input
            className="w-full text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            id="password"
            required
            type="password"
          />
        </div>

        <div className="flex flex-col  justify-center">

          <Link 
            to="/dashboard"
            type="button"
            className="flex justify-center items-center rounded-full text-xl h-11 text-white bg-morningGlory w-full sm:w-auto mb-4 sm:mb-2"
          >
            Log In
          </Link>
          <Link
            to="/createaccount"
            type="button"
            className="flex justify-center items-center rounded-full  text-xl h-11 text-white bg-morningGlory w-full sm:w-auto"
          >
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};
export default LogIn;
