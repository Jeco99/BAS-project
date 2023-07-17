import { useState } from "react";
import ImageUpload from "./imageUpload";
import PersonalDetails from "./personalDetails";
import Stepper from "./stepper";

function AccountDetails() {
  const [next, setNext] = useState(false);

  if (next) {
    return <PersonalDetails />;
  }
  return (
    <>
      <Stepper />
      <h1 className="text-center text-2xl font-semibold">Account Details</h1>
      <div className="block m-8 p-6 sm:m-32 bg-white border border-gray-200 rounded-lg shadow">
        <form className="flex flex-col gap-4 w-full" action="">
          <ImageUpload />
          <div>
            <div className="mb-2 block">
              <label htmlFor="email" value="Your email">
                Email
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="email"
              required
              type="email"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="password" value="Your password">
                Password
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="password"
              required
              type="password"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <label htmlFor="confirmpassword" value="Confirm password">
                Confirm Password
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="confirmpassword"
              required
              type="password"
            />
          </div>
          <button className="bg-morningGlory" onClick={() => (setNext(true))}>Next</button>
        </form>
      </div>
    </>
  );
}

export default AccountDetails;
