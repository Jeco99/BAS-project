import { useState } from "react";
import AccountDetails from "../user/userSignUp/accountDetails";
import PersonalDetails from "../user/userSignUp/personalDetails";

const Settings = () => {
  const [activeButton, setActiveButton] = useState("AccountDetails");

  const displayForm = () => {
    return activeButton == 'AccountDetails' 
      ?  <AccountDetails />
      :  <PersonalDetails />
    }
  

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-8 pr-8">
          <p className=" text-black font-bold text-xl">Update Profile</p>
        </div>
        <header className="flex mt-8 mb-8 justify-center">
          <nav className="mx-8 h-81 w-362">
            <button 
            className="block w-full bg-gray-200 hover:bg-gray-300 font-bold py-4 px-8 rounded-t"
            onClick={() => {setActiveButton('AccountDetails')}}
            >
              Account
            </button>
          </nav>
          <nav className="mx-8 h-81 w-362">
            <button className="block w-full bg-gray-200 hover:bg-gray-300 font-bold py-4 px-8 rounded-t"
               onClick={() => {setActiveButton('PersonalDetails')}}
            >
              Personal
            </button>
          </nav>
        </header>
        <hr className="border-b-2 border-black w-5/6 m-auto" />
      </div>
      {displayForm()}
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
};

export default Settings;
