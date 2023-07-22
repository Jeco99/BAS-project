import { useState } from "react";
import ImageUpload from "./imageUpload";
import PersonalDetails from "./personalDetails";

function AccountDetails() {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-8 pr-8">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Update Profile
          </button>
        </div>
        <header className="flex mt-8 mb-8 justify-center">
          <nav className="mx-8 h-81 w-362">
            <button className="block w-full bg-gray-200 hover:bg-gray-300 font-bold py-4 px-8 rounded-t">
              Account
            </button>
          </nav>
          <nav className="mx-8 h-81 w-362">
            <button className="block w-full bg-gray-200 hover:bg-gray-300 font-bold py-4 px-8 rounded-t">
              Personal
            </button>
          </nav>
        </header>
        <hr className="border-b-2 border-black w-5/6 m-auto" />
      </div>
      <h1 className="text-center text-2xl font-semibold mt-8">
        Account Details
      </h1>
      <div className="block m-8 p-6 sm:m-32 bg-white border border-gray-200 rounded-lg shadow">
        <form className="flex flex-col gap-4 w-full" action="">
          <ImageUpload />
          <div>
            <div className="mb-2 block">
              <label htmlFor="userName" value="Your email">
                Username
              </label>
            </div>
            <input
              className="w-full p-2.5 text-black-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              id="userName"
              required
              type="text"
            />
          </div>
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
        </form>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-end mt-8 pr-8">
          <button className="mr-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
        </div>
        <header className="flex mt-8 mb-8"></header>
      </div>
    </>
  );
}

export default AccountDetails;
